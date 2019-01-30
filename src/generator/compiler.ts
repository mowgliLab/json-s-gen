import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
import { Draft7SchemaModel } from './models/draft-schema/draft7schema.model';
import { ValueTypeEnum } from './enums/value-type.enum';
import {SchemaBuilder} from "./builders/SchemaBuilder";

export class Compiler {

    constructor(private schemaBuilder: SchemaBuilder) { }

    public compile(tree: AbstractSyntaxTreeModel): Draft7SchemaModel {
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

    public compileChild(tree: any, properties: any, parentSchema: Draft7SchemaModel): Draft7SchemaModel {
        let rootSchema = Object.assign({}, parentSchema);

        const keys = Object.keys(tree.children);
        keys.forEach((k) => {
            const child = tree.children[k];

            if (child.required && rootSchema.required) {
                rootSchema.required.push(k);
            }

            if (child.type === ValueTypeEnum.OBJECT) {
                properties[k] = this.schemaBuilder.getObjectNode(this.schemaBuilder.getId(rootSchema, k, keys.length), child);
                properties[k] = this.compileChild(child, properties[k].properties, properties[k]);
            } else if (child.type === ValueTypeEnum.ARRAY) {
                properties[k] = this.schemaBuilder.getArrayNode(this.schemaBuilder.getId(rootSchema, k, keys.length), child);
                properties[k] = this.compileChild(child, properties[k].items, properties[k]);
                if (Object.keys(properties[k].items).length === 1) {
                    properties[k].items = properties[k].items[0];
                }
            } else {
                properties[k] = this.schemaBuilder.getPrimitiveNode(this.schemaBuilder.getId(rootSchema, k, keys.length), child, k);
            }
        });

        return rootSchema;
    }
}
