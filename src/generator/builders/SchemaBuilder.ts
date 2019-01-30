import {Draft7SchemaModel} from "../models/draft-schema/draft7schema.model";
import {AbstractSyntaxTreeModel} from "../models/abstract-syntax-tree.model";
import {ValueTypeEnum} from "../enums/value-type.enum";

export abstract class SchemaBuilder {
    private options: any;

    constructor(options: any) {
        this.options = options;
    }

    public getId(parentSchema: Draft7SchemaModel, key: string, length: number): string {
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

    abstract getPrimitiveNode(id: string, child: AbstractSyntaxTreeModel, key: string): Draft7SchemaModel;
    abstract getObjectNode(id: string, child: AbstractSyntaxTreeModel): Draft7SchemaModel;
    abstract getArrayNode(id: string, child: AbstractSyntaxTreeModel): Draft7SchemaModel;
    abstract getRootNode(tree: AbstractSyntaxTreeModel): Draft7SchemaModel;
}
