import {CommonOptions} from './common-options.model';
import {StringOptions} from './string-options.model';
import {ObjectOptions} from './object-options.model';
import {ArrayOptions} from './array-options.model';
import {NumberOptions} from './number-options.model';
import {DraftVersionEnum} from "../../enums/draft-version.enum";

export class GeneratorOptionsModel {

    draftVersion?: DraftVersionEnum;

    common?: CommonOptions;
    objects?: ObjectOptions;
    arrays?: ArrayOptions;
    strings?: StringOptions;
    numbers?: NumberOptions;

    constructor() {
        this.draftVersion = DraftVersionEnum.v7;

        this.common = new CommonOptions();
        this.objects = new ObjectOptions();
        this.arrays = new ArrayOptions();
        this.strings = new StringOptions();
        this.numbers = new NumberOptions();
    }
}
