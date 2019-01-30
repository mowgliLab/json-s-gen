import {SchemaModel} from "./schema.model";

export class Draft6schemaModel extends SchemaModel {

    // any types properties
    enum?: any[];
    const?: any;

    // any types properties for description
    title?: string;
    description?: string;
    'default'?: any;
    examples?: any[];
    readOnly?: boolean;
    writeOnly?: boolean;

    // numeric properties
    minimum?: number;
    exclusiveMinimum?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;

    // string properties
    maxLength?: number;
    minLength?: number;
    pattern?: string;

    // array properties
    maxItems?: number;
    minItems?: number;
    contains?: any;

    // object properties
    maxProperties?: number;
    minProperties?: number;
}
