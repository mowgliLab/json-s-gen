import { RequiredEnum } from '../../enums/required.enum';

export interface ObjectOptions {
    required: RequiredEnum;
    additionalProperties: boolean;
}
