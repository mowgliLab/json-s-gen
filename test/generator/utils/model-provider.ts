export class ModelProvider {

    public static getJSONData(): any {
        return {
            "checked": false,
            "dimensions": {
                "width": 5,
                "height": 10
            },
            "emptyObject": {},
            "id": 1,
            "name": "A green door",
            "emptyName": "",
            "price": 12.5,
            "freePrice": 0,
            "nullValue": null,
            "tags": [
                "home",
                "green"
            ],
            "tagsNonUniq": [
                "home",
                "green",
                "home"
            ],
            "emptyArray": [],
            "guests": [
                {
                    "firstname": "Marcel",
                    "lastname": "Durant"
                },
                {
                    "firstname": "Marceline",
                    "lastname": "Durant"
                }
            ],
            "etherogene": [
                "bonjour",
                1,
                true,
                {
                    "firstname": "Marceline",
                    "lastname": "Durant"
                }
            ],
            "person": {
                "firstname": "Marcel",
                "lastname": "Durant",
                "address": {
                    "street": "rue du couvent",
                    "number": 4
                }
            }
        };
    }

    public static getDimensionsAST(): any {
        return {
            type: 'object',
            required: true,
            children: {
                width: {
                    type: 'integer',
                    required: true,
                    values: [5]
                },
                height: {
                    type: 'integer',
                    required: true,
                    values: [10]
                }
            }
        };
    }

    public static getPersonAST(): any {
        return {
            type: 'object',
            required: true,
            children: {
                firstname: {
                    type: 'string',
                    required: true,
                    values: ['Marcel']
                },
                lastname: {
                    type: 'string',
                    required: true,
                    values: ['Durant']
                },
                address: {
                    type: 'object',
                    required: true,
                    children: {
                        street: {
                            type: 'string',
                            required: true,
                            values: ['rue du couvent']
                        },
                        number: {
                            type: 'integer',
                            required: true,
                            values: [4]
                        }
                    }
                }
            }
        };
    }

    public static getTagsAST(): any {
        return {
            type: 'array',
            required: true,
            children: {
                0: {
                    type: 'string',
                    required: true,
                    values: ['home', 'green']
                }
            },
            uniqueItems: true
        };
    }

    public static getTagsNonUniqAST(): any {
        return {
            type: 'array',
            required: true,
            children: {
                0: {
                    type: 'string',
                    required: true,
                    values: ['home', 'green', 'home']
                }
            },
            uniqueItems: false
        };
    }

    public static getGuestsAST(): any {
        return {
            type: 'array',
            required: true,
            children: {
                0: {
                    type: 'object',
                    required: true,
                    children: {
                        firstname: {
                            type: 'string',
                            required: true,
                            values: ['Marcel']
                        },
                        lastname: {
                            type: 'string',
                            required: true,
                            values: ['Durant']
                        }
                    }
                }
            },
            uniqueItems: true
        };
    }

    public static getEtherogeneAST(): any {
        return {
            type: 'array',
            required: true,
            children: {
                0: {
                    type: 'string',
                    required: true,
                    values: ['bonjour']
                },
                1: {
                    type: 'integer',
                    required: true,
                    values: [1]
                },
                2: {
                    type: 'boolean',
                    required: true,
                    values: [true]
                },
                3: {
                    type: 'object',
                    required: true,
                    children: {
                        firstname: {
                            type: 'string',
                            required: true,
                            values: ['Marceline']
                        },
                        lastname: {
                            type: 'string',
                            required: true,
                            values: ['Durant']
                        }
                    }
                }
            },
            uniqueItems: true
        };
    }

    public static getDimensionsSchema(): any {
        return {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "width": {
                    "$id": "/properties/width",
                    "type": "integer",
                    "title": "The width Schema ",
                    "default": 0,
                    "examples": [
                        5
                    ]
                },
                "height": {
                    "$id": "/properties/height",
                    "type": "integer",
                    "title": "The height Schema ",
                    "default": 0,
                    "examples": [
                        10
                    ]
                }
            },
            "required": [
                "width",
                "height"
            ]
        };
    }


    public static getPersonSchema(): any {
        return {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "firstname": {
                    "$id": "/properties/firstname",
                    "type": "string",
                    "title": "The firstname Schema ",
                    "default": "",
                    "examples": [
                        "Marcel"
                    ]
                },
                "lastname": {
                    "$id": "/properties/lastname",
                    "type": "string",
                    "title": "The lastname Schema ",
                    "default": "",
                    "examples": [
                        "Durant"
                    ]
                },
                "address": {
                    "$id": "/properties/address",
                    "type": "object",
                    "properties": {
                        "street": {
                            "$id": "/properties/address/properties/street",
                            "type": "string",
                            "title": "The street Schema ",
                            "default": "",
                            "examples": [
                                "rue du couvent"
                            ]
                        },
                        "number": {
                            "$id": "/properties/address/properties/number",
                            "type": "integer",
                            "title": "The number Schema ",
                            "default": 0,
                            "examples": [
                                4
                            ]
                        }
                    },
                    "required": [
                        "street",
                        "number"
                    ]
                }
            },
            "required": [
                "firstname",
                "lastname",
                "address"
            ]
        };
    }

    public static getTagsSchema(): any {
        return {
            "$id": "http://example.com/example.json",
            "type": "array",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "items": {
                "$id": "/items",
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
    }

    public static getTagsNonUniqSchema(): any {
        return {
            "$id": "http://example.com/example.json",
            "type": "array",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "items": {
                "$id": "/items",
                "type": "string",
                "title": "The 0 Schema ",
                "default": "",
                "examples": [
                    "home",
                    "green",
                    "home"
                ]
            },
            "uniqueItems": false
        };
    }

    public static getEtherogeneSchema(): any {
        return {
            "$id": "http://example.com/example.json",
            "type": "array",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "items": [
                {
                    "$id": "/items/0",
                    "type": "string",
                    "title": "The 0 Schema ",
                    "default": "",
                    "examples": [
                        "bonjour"
                    ]
                },
                {
                    "$id": "/items/1",
                    "type": "integer",
                    "title": "The 1 Schema ",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                {
                    "$id": "/items/2",
                    "type": "boolean",
                    "title": "The 2 Schema ",
                    "default": false,
                    "examples": [
                        true
                    ]
                },
                {
                    "$id": "/items/3",
                    "type": "object",
                    "properties": {
                        "firstname": {
                            "$id": "/items/3/properties/firstname",
                            "type": "string",
                            "title": "The firstname Schema ",
                            "default": "",
                            "examples": [
                                "Marceline"
                            ]
                        },
                        "lastname": {
                            "$id": "/items/3/properties/lastname",
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
    }

}
