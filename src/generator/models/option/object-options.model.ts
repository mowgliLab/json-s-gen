import {RequiredEnum} from '../../enums/required.enum';

export class ObjectOptions {
    required: RequiredEnum;
    additionalProperties: boolean;

    constructor() {
        this.required = RequiredEnum.ifValue;
        this.additionalProperties = true;
    }
}
