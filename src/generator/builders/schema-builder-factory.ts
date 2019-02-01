import {GeneratorOptionsModel} from "../models/option/generator-options.model";
import {SchemaBuilder} from "./SchemaBuilder";
import {DraftVersionEnum} from "../enums/draft-version.enum";
import {Draft06SchemaBuilder} from "./draft-06-schema-builder";
import {Draft07SchemaBuilder} from "./draft-07-schema-builder";

export class SchemaBuilderFactory {
    public static getSchemaBuilder(options: GeneratorOptionsModel): SchemaBuilder {
        switch (options.draftVersion) {
            case DraftVersionEnum.v6:
                return new Draft06SchemaBuilder(options);
            default:
                return new Draft07SchemaBuilder(options);
        }
    }
}
