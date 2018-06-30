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

    public static getDimensionsASTt(): any {
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
}
