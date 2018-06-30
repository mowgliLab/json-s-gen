import { GeneratorOptionsModel } from './models/generator-options.model';

export class Generator {
    private jsonModel: any;
    private generatorOptions: GeneratorOptionsModel;

    constructor(generatorOptions: GeneratorOptionsModel) {
        this.generatorOptions = generatorOptions;
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
            return this.getSchemaFromDatas(param);
        }
    }
}
