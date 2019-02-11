import {AbstractSyntaxTreeModel} from "../models/abstract-syntax-tree.model";
import {ValueTypeEnum} from "../enums/value-type.enum";
import {SchemaModel} from "../models/draft-schema/schema.model";
import {GeneratorOptionsModel} from "../models/option/generator-options.model";

export abstract class SchemaBuilder {
    private _options: GeneratorOptionsModel;
    get options(): GeneratorOptionsModel {
        return this._options;
    }

    constructor(options: any) {
        this._options = options;
    }

    public getId(parentSchema: SchemaModel, key: string, length: number): string {
        const parentId = parentSchema.$id[0] === '#' ? parentSchema.$id : '#';
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

    abstract getPrimitiveNode(id: string, child: AbstractSyntaxTreeModel, key: string): SchemaModel;
    abstract getObjectNode(id: string, child: AbstractSyntaxTreeModel): SchemaModel;
    abstract getArrayNode(id: string, child: AbstractSyntaxTreeModel): SchemaModel;
    abstract getRootNode(tree: AbstractSyntaxTreeModel): SchemaModel;
}
