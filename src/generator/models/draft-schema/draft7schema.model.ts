export interface Draft7SchemaModel {
    // root properties
    '$schema'?: string;
    definitions?: any;

    // any types properties
    '$id': string;
    type: string | string[];
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
    items?: any | any[];
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    contains?: any;

    // object properties
    maxProperties?: number;
    minProperties?: number;
    properties?: any;
    required?: string[];
    additionalProperties?: boolean;
}
