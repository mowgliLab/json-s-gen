import { GeneratorOptionsModel } from './models/option/generator-options.model';
import { Draft7SchemaModel } from './models/draft-schema/draft7schema.model';
import { Compiler } from './compiler';
import { AbstractSyntaxTreeBuilder } from './abstract-synthax-tree-builder';

import { merge } from 'lodash';
import {Draft07SchemaBuilder} from "./builders/draft-07-schema-builder";

export class Generator {
    private generatorOptions: GeneratorOptionsModel;

    constructor(generatorOptions?: GeneratorOptionsModel) {
        this.generatorOptions = merge(new GeneratorOptionsModel(), generatorOptions);
    }

    /**getSchemaFromDatas(data: any): any {
        console.log('Will return a JSON schema from data.');
        return null;
    }

    getSchemaFromPath(path: string): any {
        console.log('Will return a JSON schema from path.');
        return null;
    }

    getSchemaFromUrl(url: any): any {
        console.log('Will return a JSON schema from url.');
        return null;
    }**/

    getSchema(param: string | any): any {
        if (typeof param === 'string') {
            // return this.getSchemaFromPath(param);
            throw new Error('functionality not implemented yet');
        } else {
            return this.compile(param);
        }
    }

    private compile(jsonModel: any): Draft7SchemaModel {
        const ast = AbstractSyntaxTreeBuilder.buildNode(jsonModel);
        const schemaBuilder = new Draft07SchemaBuilder(this.generatorOptions);
        const compiler = new Compiler(schemaBuilder);
        return compiler.compile(ast);
    }
}
