import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
import { Draf7SchemaModel } from './models/schema.model';
import { ValueTypeEnum } from './enums/value-type.enum';
import { Utils } from './utils';
import * as _ from 'lodash';

export class Compiler {

    public static compile(tree: AbstractSyntaxTreeModel): Draf7SchemaModel {
        let schema = <Draf7SchemaModel>{
            '$id': 'http://example.com/example.json',
            '$schema': 'http://json-schema.org/draft-07/schema#',
            type: tree.type,
            definitions: {},
            description: 'root of schema'
        };

        if (tree.type === ValueTypeEnum.OBJECT) {
            schema = {
                ...schema,
                properties: {},
                required: []
            };
            Compiler.compileChild(tree, schema.properties, schema);
        } else {
            schema = {
                ...schema,
                uniqueItems: true,
                items: []
            };
            // TODO : Manage unique object or array of objects
            Compiler.compileChild(tree, schema.properties, schema);
        }


        return schema;
    }

    public static compileChild(tree: any, properties: any, parentSchema: Draf7SchemaModel) {
        const keys = Object.keys(tree.children);
        keys.forEach((k) => {
            const child = tree.children[k];

            if (child.required && parentSchema.required) {
                parentSchema.required.push(k);
            }

            if (child.type === ValueTypeEnum.OBJECT) {
                properties[k] = Compiler.getObjectPart(Compiler.getId(parentSchema, k, keys.length), child);
                Compiler.compileChild(child, properties[k].properties, properties[k]);
            } else if (child.type === ValueTypeEnum.ARRAY) {
                properties[k] = <Draf7SchemaModel> {
                    '$id': Compiler.getId(parentSchema, k, keys.length),
                    type: child.type,
                    uniqueItems: child.uniqueItems,
                    items: []
                };
                Compiler.compileChild(child, properties[k].items, properties[k]);
                if (Object.keys(properties[k].items).length === 1) {
                    properties[k].items = properties[k].items[0];
                }
            } else {
                properties[k] = Compiler.getPimitivePart(Compiler.getId(parentSchema, k, keys.length), child, k);
            }
        })
    }

    private static getPimitivePart(id: string, child: AbstractSyntaxTreeModel, k: string): Draf7SchemaModel {
        // TODO : Manage all options
        const result = <Draf7SchemaModel> {
            '$id': id,
            type: child.type,
            title: `The ${k} Schema `,
            default: Utils.getDefaultValue(child.type)
        };

        if (child.values && child.values.length > 0) {
            result.examples = [...child.values];
        }

        return result;
    }

    private static getObjectPart(id: string, child: AbstractSyntaxTreeModel) {
        let schema = <Draf7SchemaModel> {
            '$id': id,
            type: child.type
        };
        if (Object.keys(child.children).length > 0) {
            schema = {
                ...schema,
                properties: {},
                required: []
            };
        }
        return schema;
    }

    private static getId(parentSchema: Draf7SchemaModel, key: string, length: number): string {
        const parentId = parentSchema.$id[0] === '/' ? parentSchema.$id : '';
        if (parentSchema.type === ValueTypeEnum.ARRAY) {
            if (length > 1) {
                return `${parentId}/items/${key}`;
            }else {
                return`${parentId}/items`;
            }
        } else {
            return `${parentId}/properties/${key}`;
        }
    }
}