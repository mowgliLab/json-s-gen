import {SchemaBuilder} from "./SchemaBuilder";
import {AbstractSyntaxTreeModel} from "../models/abstract-syntax-tree.model";
import {Utils} from "../utils";
import {Draft6schemaModel} from "../models/draft-schema/draft6schema.model";

export class Draft06SchemaBuilder extends SchemaBuilder {
    getArrayNode(id: string, child: AbstractSyntaxTreeModel): Draft6schemaModel {
        return <Draft6schemaModel>{
            '$id': id,
            type: child.type,
            uniqueItems: child.uniqueItems,
            items: []
        };
    }

    getObjectNode(id: string, child: AbstractSyntaxTreeModel): Draft6schemaModel {
        let schema = <Draft6schemaModel>{
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

    getPrimitiveNode(id: string, child: AbstractSyntaxTreeModel, key: string): Draft6schemaModel {
        // TODO : Manage all options
        // TODO how to accept different schema ?
        const result = <Draft6schemaModel>{
            '$id': id,
            type: child.type,
            title: `The ${key} Schema `,
            default: Utils.getDefaultValue(child.type)
        };

        if (child.values && child.values.length > 0) {
            result.examples = [...child.values];
        }

        return result;
    }

    getRootNode(tree: AbstractSyntaxTreeModel): Draft6schemaModel {
        return <Draft6schemaModel>{
            '$id': 'http://example.com/example.json',
            '$schema': 'http://json-schema.org/draft-06/schema#',
            type: tree.type,
            definitions: {},
            description: 'root of schema'
        };
    }

}
