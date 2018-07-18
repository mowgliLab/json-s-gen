import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';
import { Draf7SchemaModel } from './models/schema.model';
import { ValueTypeEnum } from './enums/value-type.enum';
import { Utils } from './utils';

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
                required: [],
                additionalProperties: false
            };
            Compiler.compileChild(tree, schema.properties, schema);
        } else {
            schema = {
                ...schema,
                uniqueItems: tree.uniqueItems,
                items: []
            };
            Compiler.compileChild(tree, schema.items, schema);
            if (Object.keys(schema.items).length === 1) {
                schema.items = schema.items[0];
            }
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
                properties[k] = Compiler.getArrayPart(Compiler.getId(parentSchema, k, keys.length), child);
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

    private static getObjectPart(id: string, child: AbstractSyntaxTreeModel): Draf7SchemaModel {
        let schema = <Draf7SchemaModel> {
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

    private static getArrayPart(id: string, child: AbstractSyntaxTreeModel): Draf7SchemaModel {
        return <Draf7SchemaModel> {
            '$id': id,
            type: child.type,
            uniqueItems: child.uniqueItems,
            items: []
        };
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