import { IDTypeEnum } from '../../enums/id-type.enum';

export interface CommonOptions {
    // For validation
    inferEnums: boolean;
    inclNullAsType: boolean;
    idType: IDTypeEnum;

    // Annotations for UI
    inferTitle: boolean;
    inferDescription: boolean;
    inferDefault: boolean;
    inferExamples: boolean;
    readOnly: boolean;
    writeOnly: boolean;
}
