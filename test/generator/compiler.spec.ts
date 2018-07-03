import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Compiler } from '../../src/generator/compiler';
import { Draf7SchemaModel } from '../../src/generator/models/schema.model';
import { ValueTypeEnum } from '../../src/generator/enums/value-type.enum';
import { AbstractSyntaxTreeModel } from '../../src/generator/models/abstract-syntax-tree.model';

describe('`#Compiler', () => {

    describe('primitive part compileChile(tree, properties, parentSchema)', () => {

        let ast: AbstractSyntaxTreeModel;
        let parentSchema: Draf7SchemaModel;

        beforeEach(() => {
            ast = {
                'type': ValueTypeEnum.OBJECT,
                'required': true,
                'children': {}
            };
            parentSchema = {
                '$id': '/properties/parent',
                type: 'object',
                properties: {},
                required: []
            };
        });

        it('should return part for string', () => {
            const key = 'firstname';
            ast.children[key] = {
                'type': 'string',
                'required': true,
                'values': ['Marcel']
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'string',
                'title': `The ${key} Schema `,
                'default': '',
                'examples': [
                    'Marcel'
                ]
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('should return part for integer', () => {
            const key = 'width';
            ast.children[key] = {
                'type': 'integer',
                'required': true,
                'values': [5]
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'integer',
                'title': `The ${key} Schema `,
                'default': 0,
                'examples': [
                    5
                ]
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('should return part for number', () => {
            const key = 'price';
            ast.children[key] = {
                'type': 'number',
                'required': true,
                'values': [12.5]
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'number',
                'title': `The ${key} Schema `,
                'default': 0,
                'examples': [
                    12.5
                ]
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('should return part for boolean', () => {
            const key = 'checked';
            ast.children[key] = {
                'type': 'boolean',
                'required': true,
                'values': [false]
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'boolean',
                'title': `The ${key} Schema `,
                'default': false,
                'examples': [
                    false
                ]
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('should return part for null', () => {
            const key = 'nullValue';
            ast.children[key] = {
                'type': 'null',
                'required': true,
                'values': [null]
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'null',
                'title': `The ${key} Schema `,
                'default': null,
                'examples': [
                    null
                ]
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
    });

    describe('object part compileChild(tree, properties, parentSchema)', () => {

        let ast: AbstractSyntaxTreeModel;
        let parentSchema: Draf7SchemaModel;

        beforeEach(() => {
            ast = {
                'type': ValueTypeEnum.OBJECT,
                'required': true,
                'children': {}
            };
            parentSchema = {
                '$id': '/properties/parent',
                type: 'object',
                properties: {},
                required: []
            };
        });

        it('shoud return part of schema for object', () => {
            const key = 'address';
            ast.children[key] = {
                'type': 'object',
                'required': true,
                'children': {
                    'street': {
                        'type': 'string',
                        'required': true,
                        'values': ['rue du couvent']
                    },
                    'number': {
                        'type': 'integer',
                        'required': true,
                        'values': [4]
                    }
                }
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'object',
                'properties': {
                    'street': {
                        '$id': `/properties/parent/properties/${key}/properties/street`,
                        'type': 'string',
                        'title': 'The street Schema ',
                        'default': '',
                        'examples': [
                            'rue du couvent'
                        ]
                    },
                    'number': {
                        '$id': `/properties/parent/properties/${key}/properties/number`,
                        'type': 'integer',
                        'title': 'The number Schema ',
                        'default': 0,
                        'examples': [
                            4
                        ]
                    }
                },
                required: ['street', 'number']
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('shoud return part of schema for empty', () => {
            const key = 'emptyObject';
            ast.children[key] = {
                'type': 'object',
                'required': false,
                'children': {}
            };

            const assert = {
                '$id': `/properties/parent/properties/${key}`,
                'type': 'object'
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.not.contains(key);
        });
        it('shoud return part of schema for object into object', () => {
            const key = 'person';
            ast.children[key] = {
                'type': 'object',
                'required': true,
                'children': {
                    'firstname': {
                        'type': 'string',
                        'required': true,
                        'values': ['Marcel']
                    },
                    'lastname': {
                        'type': 'string',
                        'required': true,
                        'values': ['Durant']
                    },
                    'address': {
                        'type': 'object',
                        'required': true,
                        'children': {
                            'street': {
                                'type': 'string',
                                'required': true,
                                'values': ['rue du couvent']
                            },
                            'number': {
                                'type': 'integer',
                                'required': true,
                                'values': [4]
                            }
                        }
                    }
                }
            };

            const assert = {
                '$id': '/properties/parent/properties/person',
                'type': 'object',
                'properties': {
                    'firstname': {
                        '$id': '/properties/parent/properties/person/properties/firstname',
                        'type': 'string',
                        'title': 'The firstname Schema ',
                        'default': '',
                        'examples': [
                            'Marcel'
                        ]
                    },
                    'lastname': {
                        '$id': '/properties/parent/properties/person/properties/lastname',
                        'type': 'string',
                        'title': 'The lastname Schema ',
                        'default': '',
                        'examples': [
                            'Durant'
                        ]
                    },
                    'address': {
                        '$id': '/properties/parent/properties/person/properties/address',
                        'type': 'object',
                        'properties': {
                            'street': {
                                '$id': '/properties/parent/properties/person/properties/address/properties/street',
                                'type': 'string',
                                'title': 'The street Schema ',
                                'default': '',
                                'examples': [
                                    'rue du couvent'
                                ]
                            },
                            'number': {
                                '$id': '/properties/parent/properties/person/properties/address/properties/number',
                                'type': 'integer',
                                'title': 'The number Schema ',
                                'default': 0,
                                'examples': [
                                    4
                                ]
                            }
                        },
                        required: ['street', 'number']
                    }
                },
                required: ['firstname', 'lastname', 'address']
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
    });

    describe('array part compileChild(tree, properties, parentSchema)', () => {

        let ast: AbstractSyntaxTreeModel;
        let parentSchema: Draf7SchemaModel;

        beforeEach(() => {
            ast = {
                'type': ValueTypeEnum.OBJECT,
                'required': true,
                'children': {}
            };
            parentSchema = {
                '$id': '/properties/parent',
                type: 'object',
                properties: {},
                required: []
            };
        });

        it('shoud return part of schema for homogene array', () => {
            const key = 'tags';
            ast.children[key] = {
                "type": "array",
                "required": true,
                "children": {
                    "0": {
                        "type": "string",
                        "required": true,
                        "values": ["home", "green"]
                    }
                },
                "uniqueItems": true
            };

            const assert = {
                '$id': `/properties/parent/properties/tags`,
                "type": "array",
                "items": {
                    "$id": "/properties/parent/properties/tags/items",
                    "type": "string",
                    "title": "The 0 Schema ",
                    "default": "",
                    "examples": [
                        "home",
                        "green"
                    ]
                },
                "uniqueItems": true
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('shoud return part of schema for non uniq array', () => {
            const key = 'tagsNonUniq';
            ast.children[key] = {
                "type": "array",
                "required": true,
                "children": {
                    "0": {
                        "type": "string",
                        "required": true,
                        "values": ["home", 'green']
                    }
                },
                "uniqueItems": false
            };

            const assert = {
                '$id': `/properties/parent/properties/tagsNonUniq`,
                "type": "array",
                "items": {
                    "$id": "/properties/parent/properties/tagsNonUniq/items",
                    "type": "string",
                    "title": "The 0 Schema ",
                    "default": "",
                    "examples": [
                        "home",
                        "green"
                    ]
                },
                "uniqueItems": false
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('shoud return part of schema for etherogene array', () => {
            const key = 'etherogene';
            ast.children[key] = {
                "type": "array",
                "required": true,
                "children": {
                    "0": {
                        "type": "string",
                        "required": true,
                        "values": ["bonjour"]
                    },
                    "1": {
                        "type": "integer",
                        "required": true,
                        "values": [1]
                    },
                    "2": {
                        "type": "boolean",
                        "required": true,
                        "values": [true]
                    },
                    "3": {
                        "type": "object",
                        "required": true,
                        "children": {
                            "firstname": {
                                "type": "string",
                                "required": true,
                                "values": ["Marceline"]
                            },
                            "lastname": {
                                "type": "string",
                                "required": true,
                                "values": ["Durant"]
                            }
                        }
                    }
                },
                "uniqueItems": true
            };

            const assert = {
                '$id': `/properties/parent/properties/etherogene`,
                "type": "array",
                "items": [
                    {
                        "$id": "/properties/parent/properties/etherogene/items/0",
                        "type": "string",
                        "title": "The 0 Schema ",
                        "default": "",
                        "examples": [
                            "bonjour"
                        ]
                    },
                    {
                        "$id": "/properties/parent/properties/etherogene/items/1",
                        "type": "integer",
                        "title": "The 1 Schema ",
                        "default": 0,
                        "examples": [
                            1
                        ]
                    },
                    {
                        "$id": "/properties/parent/properties/etherogene/items/2",
                        "type": "boolean",
                        "title": "The 2 Schema ",
                        "default": false,
                        "examples": [
                            true
                        ]
                    },
                    {
                        "$id": "/properties/parent/properties/etherogene/items/3",
                        "type": "object",
                        "properties": {
                            "firstname": {
                                "$id": "/properties/parent/properties/etherogene/items/3/properties/firstname",
                                "type": "string",
                                "title": "The firstname Schema ",
                                "default": "",
                                "examples": [
                                    "Marceline"
                                ]
                            },
                            "lastname": {
                                "$id": "/properties/parent/properties/etherogene/items/3/properties/lastname",
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
                        ]
                    }
                ],
                "uniqueItems": true
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).to.contains(key);
        });
        it('shoud return part of schema for empty array', () => {
            const key = 'emptyObject';
            ast.children[key] = {
                type: 'array',
                required: false,
                children: {},
                uniqueItems: true
            };

            const assert = {
                '$id': `/properties/parent/properties/emptyObject`,
                "type": "array",
                "items": [],
                "uniqueItems": true
            };

            Compiler.compileChild(ast, parentSchema.properties, parentSchema);
            expect(parentSchema.properties[key]).to.deep.equal(assert);
            expect(parentSchema.required).not.to.contains(key);
        });
    });

    it('Should test getId');
    it('Should test getArrayPart');
    it('Should test getObjectPart');
    it('Should test getPimitivePart');
    it('Should test compile');
});
