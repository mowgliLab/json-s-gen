import { expect } from 'chai';
import { describe,it } from 'mocha';
import { Generator } from '../../src/generator';
import { ModelProvider } from './utils/model-provider';

describe('#Generator', () => {
    // it('Should create a generator', () => {
    //     const result = new Generator({test: 'voila'});
    //     expect(result).to.instanceOf(new Generator({test: 'voila'}));
    // })
    it('new Generator(options)');
    it('getSchema(pathToJson)');

    describe('getSchema(jsonModel)', () => {
        let generator: Generator;
        beforeEach(() => {
            generator = new Generator();
        });

        it('should schematise a basic objet with one level of simple properties.', () => {
            const assert = ModelProvider.getSimpleJSONSchema();
            const jsonModel = ModelProvider.getSimpleJSON();
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise an object containing another object', () => {
            const assert = ModelProvider.getPersonSchema();
            const jsonModel = ModelProvider.getJSONData().person;
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise an object containing arrays', () => {
            const assert = {
                "$id": "http://example.com/example.json",
                "type": "object",
                "definitions": {},
                "description": "root of schema",
                "$schema": "http://json-schema.org/draft-07/schema#",
                "properties": {
                    "colors": {
                        "$id": "/properties/colors",
                        "type": "array",
                        "items": {
                            "$id": "/properties/colors/items",
                            "type": "string",
                            "title": "The 0 Schema ",
                            "default": "",
                            "examples": [
                                "red",
                                "blue",
                                "green",
                                "white"
                            ]
                        },
                        "uniqueItems": true
                    },
                    "vehicles": {
                        "$id": "/properties/vehicles",
                        "type": "array",
                        "items": {
                            "$id": "/properties/vehicles/items",
                            "type": "string",
                            "title": "The 0 Schema ",
                            "default": "",
                            "examples": [
                                "car",
                                "truck",
                                "airplane"
                            ]
                        },
                        "uniqueItems": true
                    },
                    "primeNbrs": {
                        "$id": "/properties/primeNbrs",
                        "type": "array",
                        "items": {
                            "$id": "/properties/primeNbrs/items",
                            "type": "integer",
                            "title": "The 0 Schema ",
                            "default": 0,
                            "examples": [
                                2,
                                3,
                                5,
                                7,
                                11
                            ]
                        },
                        "uniqueItems": true
                    }
                },
                "required": [
                    "colors",
                    "vehicles",
                    "primeNbrs"
                ],
                "additionalProperties": false
            };
            const jsonModel = {
                "colors": ["red", "blue", "green", "white"],
                "vehicles": ["car", "truck", "airplane"],
                "primeNbrs": [2, 3, 5, 7, 11]
            };
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise the big object', () => {
            const assert = ModelProvider.getJSONDataSchema();
            const jsonModel = ModelProvider.getJSONData();
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise a basic homogene array with one level of simple properties.', () => {
            const assert = ModelProvider.getSimpleArraySchema();
            const jsonModel = ModelProvider.getSimpleArray();
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise an array containing one sort of object', () => {
            const assert = {
                "$id": "http://example.com/example.json",
                "type": "array",
                "definitions": {},
                "description": "root of schema",
                "$schema": "http://json-schema.org/draft-07/schema#",
                "items": {
                    "$id": "/items",
                    "type": "object",
                    "properties": {
                        "firstname": {
                            "$id": "/items/properties/firstname",
                            "type": "string",
                            "title": "The firstname Schema ",
                            "default": "",
                            "examples": [
                                "Marcel"
                            ]
                        },
                        "lastname": {
                            "$id": "/items/properties/lastname",
                            "type": "string",
                            "title": "The lastname Schema ",
                            "default": "",
                            "examples": [
                                "Durant"
                            ]
                        }
                    },
                    "required": [
                        "firstname",
                        "lastname"
                    ],
                    "additionalProperties": false
                },
                "uniqueItems": true
            };
            const jsonModel = ModelProvider.getJSONData().guests;
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise an array containing arrays', () => {
            const assert = {
                "$id": "http://example.com/example.json",
                "type": "array",
                "definitions": {},
                "description": "root of schema",
                "$schema": "http://json-schema.org/draft-07/schema#",
                "items": [
                    {
                        "$id": "/items/0",
                        "type": "array",
                        "items": {
                            "$id": "/items/0/items",
                            "type": "string",
                            "title": "The 0 Schema ",
                            "default": "",
                            "examples": [
                                "red",
                                "blue",
                                "green",
                                "white"
                            ]
                        },
                        "uniqueItems": true
                    },
                    {
                        "$id": "/items/1",
                        "type": "array",
                        "items": {
                            "$id": "/items/1/items",
                            "type": "integer",
                            "title": "The 0 Schema ",
                            "default": 0,
                            "examples": [
                                2,
                                3,
                                5,
                                7,
                                11
                            ]
                        },
                        "uniqueItems": true
                    }
                ],
                "uniqueItems": true
            };
            const jsonModel = [
                ["red", "blue", "green", "white"],
                ["car", "truck", "airplane"],
                [2, 3, 5, 7, 11]
            ];
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
        it('should schematise an array containing etherogene elements', () => {
            const assert = ModelProvider.getEtherogeneSchema();
            const jsonModel = ModelProvider.getJSONData().etherogene;
            const result = generator.getSchema(jsonModel);
            expect(result).to.deep.equal(assert);
        });
    });
});
