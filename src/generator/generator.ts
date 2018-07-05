import { GeneratorOptionsModel } from './models/generator-options.model';
import { Draf7SchemaModel } from './models/schema.model';
import { Compiler } from './compiler';
import { AbstractSyntaxTreeBuilder } from './abstract-synthax-tree-builder';

export class Generator {
    private generatorOptions: GeneratorOptionsModel;

    constructor(generatorOptions?: GeneratorOptionsModel) {
        this.generatorOptions = generatorOptions || new GeneratorOptionsModel();
    }

    getSchemaFromDatas(data: any): any {
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
    }

    getSchema(param: string | any): any {
        if (typeof param === 'string') {
            return this.getSchemaFromPath(param);
        } else {
            return this.compile(param);
        }
    }

    private compile(jsonModel: any): Draf7SchemaModel {
        const ast = AbstractSyntaxTreeBuilder.buildNode(jsonModel);
        return Compiler.compile(ast);
    }
}
