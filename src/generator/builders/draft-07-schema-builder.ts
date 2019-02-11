import {SchemaBuilder} from "./SchemaBuilder";
import {Draft7SchemaModel} from "../models/draft-schema/draft7schema.model";
import {AbstractSyntaxTreeModel} from "../models/abstract-syntax-tree.model";
import {Utils} from "../utils";

export class Draft07SchemaBuilder extends SchemaBuilder {
    getArrayNode(id: string, child: AbstractSyntaxTreeModel): Draft7SchemaModel {
        return <Draft7SchemaModel>{
            '$id': id,
            type: child.type,
            uniqueItems: child.uniqueItems,
            items: []
        };
    }

    getObjectNode(id: string, child: AbstractSyntaxTreeModel): Draft7SchemaModel {
        let schema = <Draft7SchemaModel>{
            '$id': id,
            type: child.type
        };
        if (Object.keys(child.children).length > 0) {
            schema = {
                ...schema,
                properties: {},
                required: [],
                additionalProperties: false
            };
        }
        return schema;
    }

    getPrimitiveNode(id: string, child: AbstractSyntaxTreeModel, key: string): Draft7SchemaModel {
        // TODO : Manage all options
        const result = <Draft7SchemaModel>{
            '$id': id,
            type: child.type,
            default: Utils.getDefaultValue(child.type)
        };
        if (this.options.common && this.options.common.inferTitle) {
            result.title = `The ${key} Schema `;
        }

        if (child.values && child.values.length > 0) {
            result.examples = [...child.values];
        }

        return result;
    }

    getRootNode(tree: AbstractSyntaxTreeModel): Draft7SchemaModel {
        return <Draft7SchemaModel>{
            '$id': 'http://example.com/example.json',
            '$schema': 'http://json-schema.org/draft-07/schema#',
            type: tree.type,
            definitions: {},
            description: 'root of schema'
        };
    }

    pr

}
