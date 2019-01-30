import {AbstractSyntaxTreeModel} from "../models/abstract-syntax-tree.model";
import {Draft7SchemaModel} from "../models/draft-schema/draft7schema.model";

export interface ICompiler {
    compile(tree: AbstractSyntaxTreeModel): Draft7SchemaModel;
    compileChild(tree: any, properties: any, parentSchema: Draft7SchemaModel): Draft7SchemaModel;
}
