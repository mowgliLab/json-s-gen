export class NumberOptions {
    multipleOf?: number;
    maximum?: number;
    minimum?: number;
    exclusiveMinimum: boolean;
    exclusiveMaximum: boolean;
    detectInteger: boolean;

    constructor() {
        this.exclusiveMinimum = false;
        this.exclusiveMaximum = false;
        this.detectInteger = true;
    }
}
