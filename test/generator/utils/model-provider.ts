import { Draf7SchemaModel } from '../../../src/generator/models/schema.model';

export class ModelProvider {

    public static getSimpleArray(): Array<any> {
        return ["red", "green", "blue", "yellow", "purple", "white"];
    }
    
    public static getSimpleArraySchema(): Draf7SchemaModel {
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
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "purple",
                    "white"
                ]
            },
            "uniqueItems": true
        };
    }
    
    public static getSimpleJSON(): any {
        return {
            "checked": false,
            "id": 1,
            "name": "A green door",
            "price": 12.5
        };
    }

    public static getSimpleJSONSchema(): Draf7SchemaModel {
        return {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "checked": {
                    "$id": "/properties/checked",
                    "type": "boolean",
                    "title": "The checked Schema ",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "id": {
                    "$id": "/properties/id",
                    "type": "integer",
                    "title": "The id Schema ",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "name": {
                    "$id": "/properties/name",
                    "type": "string",
                    "title": "The name Schema ",
                    "default": "",
                    "examples": [
                        "A green door"
                    ]
                },
                "price": {
                    "$id": "/properties/price",
                    "type": "number",
                    "title": "The price Schema ",
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
            ]
        };
    }
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

    public static getJSONDataSchema(): Draf7SchemaModel {
        return {
            "$id": "http://example.com/example.json",
            "type": "object",
            "definitions": {},
            "description": "root of schema",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "properties": {
                "checked": {
                    "$id": "/properties/checked",
                    "type": "boolean",
                    "title": "The checked Schema ",
                    "default": false,
                    "examples": [
                        false
                    ]
                },
                "dimensions": {
                    "$id": "/properties/dimensions",
                    "type": "object",
                    "properties": {
                        "width": {
                            "$id": "/properties/dimensions/properties/width",
                            "type": "integer",
                            "title": "The width Schema ",
                            "default": 0,
                            "examples": [
                                5
                            ]
                        },
                        "height": {
                            "$id": "/properties/dimensions/properties/height",
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
                },
                "emptyObject": {
                    "$id": "/properties/emptyObject",
                    "type": "object"
                },
                "id": {
                    "$id": "/properties/id",
                    "type": "integer",
                    "title": "The id Schema ",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "name": {
                    "$id": "/properties/name",
                    "type": "string",
                    "title": "The name Schema ",
                    "default": "",
                    "examples": [
                        "A green door"
                    ]
                },
                "emptyName": {
                    "$id": "/properties/emptyName",
                    "type": "string",
                    "title": "The emptyName Schema ",
                    "default": "",
                    "examples": [
                        ""
                    ]
                },
                "price": {
                    "$id": "/properties/price",
                    "type": "number",
                    "title": "The price Schema ",
                    "default": 0,
                    "examples": [
                        12.5
                    ]
                },
                "freePrice": {
                    "$id": "/properties/freePrice",
                    "type": "integer",
                    "title": "The freePrice Schema ",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "nullValue": {
                    "$id": "/properties/nullValue",
                    "type": "null",
                    "title": "The nullValue Schema ",
                    "default": null,
                    "examples": [
                        null
                    ]
                },
                "tags": {
                    "$id": "/properties/tags",
                    "type": "array",
                    "items": {
                        "$id": "/properties/tags/items",
                        "type": "string",
                        "title": "The 0 Schema ",
                        "default": "",
                        "examples": [
                            "home",
                            "green"
                        ]
                    },
                    "uniqueItems": true
                },
                "tagsNonUniq": {
                    "$id": "/properties/tagsNonUniq",
                    "type": "array",
                    "items": {
                        "$id": "/properties/tagsNonUniq/items",
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
                },
                "emptyArray": {
                    "$id": "/properties/emptyArray",
                    "type": "array",
                    "items": [],
                    "uniqueItems": true
                },
                "guests": {
                    "$id": "/properties/guests",
                    "type": "array",
                    "items": {
                        "$id": "/properties/guests/items",
                        "type": "object",
                        "properties": {
                            "firstname": {
                                "$id": "/properties/guests/items/properties/firstname",
                                "type": "string",
                                "title": "The firstname Schema ",
                                "default": "",
                                "examples": [
                                    "Marcel"
                                ]
                            },
                            "lastname": {
                                "$id": "/properties/guests/items/properties/lastname",
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
                    },
                    "uniqueItems": true
                },
                "etherogene": {
                    "$id": "/properties/etherogene",
                    "type": "array",
                    "items": [
                        {
                            "$id": "/properties/etherogene/items/0",
                            "type": "string",
                            "title": "The 0 Schema ",
                            "default": "",
                            "examples": [
                                "bonjour"
                            ]
                        },
                        {
                            "$id": "/properties/etherogene/items/1",
                            "type": "integer",
                            "title": "The 1 Schema ",
                            "default": 0,
                            "examples": [
                                1
                            ]
                        },
                        {
                            "$id": "/properties/etherogene/items/2",
                            "type": "boolean",
                            "title": "The 2 Schema ",
                            "default": false,
                            "examples": [
                                true
                            ]
                        },
                        {
                            "$id": "/properties/etherogene/items/3",
                            "type": "object",
                            "properties": {
                                "firstname": {
                                    "$id": "/properties/etherogene/items/3/properties/firstname",
                                    "type": "string",
                                    "title": "The firstname Schema ",
                                    "default": "",
                                    "examples": [
                                        "Marceline"
                                    ]
                                },
                                "lastname": {
                                    "$id": "/properties/etherogene/items/3/properties/lastname",
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
                },
                "person": {
                    "$id": "/properties/person",
                    "type": "object",
                    "properties": {
                        "firstname": {
                            "$id": "/properties/person/properties/firstname",
                            "type": "string",
                            "title": "The firstname Schema ",
                            "default": "",
                            "examples": [
                                "Marcel"
                            ]
                        },
                        "lastname": {
                            "$id": "/properties/person/properties/lastname",
                            "type": "string",
                            "title": "The lastname Schema ",
                            "default": "",
                            "examples": [
                                "Durant"
                            ]
                        },
                        "address": {
                            "$id": "/properties/person/properties/address",
                            "type": "object",
                            "properties": {
                                "street": {
                                    "$id": "/properties/person/properties/address/properties/street",
                                    "type": "string",
                                    "title": "The street Schema ",
                                    "default": "",
                                    "examples": [
                                        "rue du couvent"
                                    ]
                                },
                                "number": {
                                    "$id": "/properties/person/properties/address/properties/number",
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
                }
            },
            "required": [
                "checked",
                "dimensions",
                "id",
                "name",
                "price",
                "freePrice",
                "nullValue",
                "tags",
                "tagsNonUniq",
                "guests",
                "etherogene",
                "person"
            ]
        };
    }

}
