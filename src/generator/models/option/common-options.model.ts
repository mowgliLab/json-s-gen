import {IDTypeEnum} from '../../enums/id-type.enum';

export class CommonOptions {
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

    constructor() {
        this.inferEnums = false;
        this.inclNullAsType = false;
        this.idType = IDTypeEnum.relative;
        this.inferTitle = false;
        this.inferDescription = false;
        this.inferDefault = false;
        this.inferExamples = false;
        this.readOnly = false;
        this.writeOnly = false;
    }

}
