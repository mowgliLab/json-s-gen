import {ArrayValidationTypeEnum} from '../../enums/array-validation-type.enum';

export class ArrayOptions {
    uniqueItems: boolean;
    additionalItems: boolean;
    minItem?: number;
    maxItems?: number;
    validationType: ArrayValidationTypeEnum;

    constructor() {
        this.uniqueItems = false;
        this.additionalItems = true;
        this.validationType = ArrayValidationTypeEnum.listValidation;
    }
}
