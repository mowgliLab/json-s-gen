import {CommonOptions} from './common-options.model';
import {StringOptions} from './string-options.model';
import {ObjectOptions} from './object-options.model';
import {ArrayOptions} from './array-options.model';
import {NumberOptions} from './number-options.model';
import {IDTypeEnum} from '../../enums/id-type.enum';
import {RequiredEnum} from '../../enums/required.enum';
import {ArrayValidationTypeEnum} from '../../enums/array-validation-type.enum';
import {DraftVersionEnum} from "../../enums/draft-version.enum";

export class GeneratorOptionsModel {

    draftVersion: DraftVersionEnum;

    common: CommonOptions;
    objects: ObjectOptions;
    arrays: ArrayOptions;
    strings: StringOptions;
    numbers: NumberOptions;

    constructor() {
        this.draftVersion = DraftVersionEnum.v7;

        this.common = this.getDefaultCommonOptions();
        this.objects = this.getDefaultObjectOptions();
        this.arrays = this.getDefaultArrayOptions();
        this.strings = this.getDefaultStringOptions();
        this.numbers = this.getDefaultNumberOptions();
    }

    private getDefaultCommonOptions(): CommonOptions {
        return <CommonOptions> {
            inferEnums: false,
            inclNullAsType: false,
            idType: IDTypeEnum.relative,
            inferTitle: false,
            inferDescription: false,
            inferDefault: false,
            inferExamples: false,
            readOnly: false,
            writeOnly: false
        };
    }

    private getDefaultObjectOptions(): ObjectOptions {
        return <ObjectOptions> {
            required: RequiredEnum.ifValue,
            additionalProperties: true
        };
    }

    private getDefaultArrayOptions(): ArrayOptions {
        return <ArrayOptions> {
            uniqueItems: false,
            additionalItems: true,
            validationType: ArrayValidationTypeEnum.listValidation
        };
    }

    private getDefaultStringOptions(): StringOptions {
        return <StringOptions> {};
    }

    private getDefaultNumberOptions(): NumberOptions {
        return <NumberOptions> {
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            detectInteger: true
        };
    }
}
