import { ArrayValidationTypeEnum } from '../../enums/array-validation-type.enum';

export interface ArrayOptions {
    uniqueItems: boolean;
    additionalItems: boolean;
    minItem?: number;
    maxItems?: number;
    validationType: ArrayValidationTypeEnum;
}
