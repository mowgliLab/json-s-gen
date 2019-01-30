import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
import { ValueTypeEnum } from './enums/value-type.enum';
import {SchemaBuilder} from "./builders/SchemaBuilder";
import {SchemaModel} from "./models/draft-schema/schema.model";

/**
 * Compile and Abstract Syntax Tree to a JSON Schema.
 * This class use a SchemaBuilder to help compiling following draft versions rules.
 */
export class Compiler {

    constructor(private schemaBuilder: SchemaBuilder) { }

    /**
     * Entry point of compiler to compile AST to Schema.
     * @param tree : AbstractSyntaxTreeModel on which base the schema.
     */
    public compile(tree: AbstractSyntaxTreeModel): SchemaModel {
        let schema = this.schemaBuilder.getRootNode(tree);

        if (tree.type === ValueTypeEnum.OBJECT) {
            schema = {
                ...schema,
                properties: {},
                required: [],
                additionalProperties: false
            };
            schema = this.compileChild(tree, schema.properties, schema);
        } else {
            schema = {
                ...schema,
                uniqueItems: tree.uniqueItems,
                items: []
            };
            schema = this.compileChild(tree, schema.items, schema);
            if (Object.keys(schema.items).length === 1) {
                schema.items = schema.items[0];
            }
        }

        return schema;
    }

    /**
     * Function used recursively to transform all nodes from the tree.
     * @param tree: the tree to transform
     * @param properties: properties of items to add children to.
     * @param parentSchema: parent schema to add required properties to.
     */
    public compileChild(tree: any, properties: any, parentSchema: SchemaModel): SchemaModel {
        let _parentSchema = Object.assign({}, parentSchema);

        const keys = Object.keys(tree.children);
        keys.forEach((k) => {
            const child = tree.children[k];

            if (child.required && _parentSchema.required) {
                _parentSchema.required.push(k);
            }

            if (child.type === ValueTypeEnum.OBJECT) {
                properties[k] = this.schemaBuilder.getObjectNode(this.schemaBuilder.getId(_parentSchema, k, keys.length), child);
                properties[k] = this.compileChild(child, properties[k].properties, properties[k]);
            } else if (child.type === ValueTypeEnum.ARRAY) {
                properties[k] = this.schemaBuilder.getArrayNode(this.schemaBuilder.getId(_parentSchema, k, keys.length), child);
                properties[k] = this.compileChild(child, properties[k].items, properties[k]);
                if (Object.keys(properties[k].items).length === 1) {
                    properties[k].items = properties[k].items[0];
                }
            } else {
                properties[k] = this.schemaBuilder.getPrimitiveNode(this.schemaBuilder.getId(_parentSchema, k, keys.length), child, k);
            }
        });

        return _parentSchema;
    }
}
