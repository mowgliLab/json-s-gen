export abstract class SchemaModel {
    // root properties
    '$schema'?: string;
    definitions?: any;

    // any types properties
    '$id': string;
    'type': string | string[];

    // array properties
    items?: any | any[];
    uniqueItems?: boolean;

    // object properties
    required?: string[];
    properties?: any;
    additionalProperties?: boolean;
}
