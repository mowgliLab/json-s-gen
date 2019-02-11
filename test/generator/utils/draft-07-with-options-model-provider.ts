import {Draft7SchemaModel} from "../../../src/generator/models/draft-schema/draft7schema.model";

export class Draft07WithOptionsModelProvider {

    public static getSimpleJSONSchemaNoTitle(): Draft7SchemaModel {
        return {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "checked": {
                    "$id": "#/properties/checked",
                    "type": "boolean",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "id": {
                    "$id": "#/properties/id",
                    "type": "integer",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "name": {
                    "$id": "#/properties/name",
                    "type": "string",
                    "default": "",
                    "examples": [
                        "A green door"
                    ]
                },
                "price": {
                    "$id": "#/properties/price",
                    "type": "number",
                    "default": 0,
                    "examples": [
                        12.5
                    ]
                }
            },
            "required": [
                "checked",
                "id",
                "name",
                "price"
            ],
            "additionalProperties": false
        };
    }
}
