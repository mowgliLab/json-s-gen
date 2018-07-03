import { expect } from 'chai';
import { describe,it } from 'mocha';
import { Utils } from '../../src/generator/utils';
import { ValueTypeEnum } from '../../src/generator/enums/value-type.enum';

describe('#Utils', () => {

    describe('getType(value)', () => {
        it('Should return string', () => {
            const result = Utils.getType('coucou');
            expect(result).to.equal('string');
        });
        it('Should return string', () => {
            const result = Utils.getType(new String('coucou'));
            expect(result).to.equal('string');
        });
        it('Should return boolean', () => {
            const result = Utils.getType(true);
            expect(result).to.equal('boolean');
        });
        it('Should return boolean', () => {
            const result = Utils.getType(false);
            expect(result).to.equal('boolean');
        });
        it('Should return number', () => {
            const result = Utils.getType(1.2);
            expect(result).to.equal('number');
        });
        it('Should return number', () => {
            const result = Utils.getType(19875645.2365);
            expect(result).to.equal('number');
        });
        it('Should return integer', () => {
            const result = Utils.getType(3);
            expect(result).to.equal('integer');
        });
        it('Should return integer', () => {
            const result = Utils.getType(9875698453);
            expect(result).to.equal('integer');
        });
        it('Should return object', () => {
            const result = Utils.getType({foo: 'bar', truc: true, machin: { prop1: 1 }});
            expect(result).to.equal('object');
        });
        it('Should return object', () => {
            const dummy = new DummyObject(5, "barz", {hello: 'coucou', world: true});
            const result = Utils.getType(dummy);
            expect(result).to.equal('object');
        });
        it('Should return array', () => {
            const test = ['coucou', 'le', 'monde'];
            const result = Utils.getType(test);
            expect(result).to.equal('array');
        });
        it('Should return array', () => {
            const test = new Array("Hello", "world");
            const result = Utils.getType(test);
            expect(result).to.equal('array');
        });
        it('Should return null', () => {
            const result = Utils.getType(undefined);
            expect(result).to.equal('null');
        });
        it('Should return null', () => {
            const result = Utils.getType(null);
            expect(result).to.equal('null');
        });
    });

    describe('isEqualWithout(obj1, obj2, ...omitValues)', () => {
        it('Should compare object without "values" (false)', () => {
            const obj1 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "boolean",
                        "values": [
                            "Marcel"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const obj2 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marceline"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(false);
        });
        it('Should compare object without "values" (true)', () => {
            const obj1 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marcel"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const obj2 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marceline"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(true);
        });
        it('Should compare object with "values" (false)', () => {
            const obj1 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marcel"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const obj2 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marceline"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const result = Utils.isEqualWithout(obj1, obj2);
            expect(result).to.be.equal(false);
        });
        it('Should compare object with "values" (true)', () => {
            const obj1 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marcel"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const obj2 = {
                "children": {
                    "firstname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Marcel"
                        ]
                    },
                    "lastname": {
                        "required": true,
                        "type": "string",
                        "values": [
                            "Durant"
                        ]
                    }
                },
                "required": true,
                "type": "object"
            };
            const result = Utils.isEqualWithout(obj1, obj2);
            expect(result).to.be.equal(true);
        });
        it('Should compare two strings (false)', () => {
            const obj1 = 'hello';
            const obj2 = 'world';
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(false);
        });
        it('Should compare two strings (true)', () => {
            const obj1 = 'hello';
            const obj2 = 'hello';
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(true);
        });
        it('Should compare two simple objects values (false)', () => {
            const obj1 = {
                prop1: 'hello1',
                values: [
                    'velo',
                    'voiture',
                    'camion'
                ]
            };
            const obj2 = {
                prop1: 'hello2',
                values: [
                    'bicycle',
                    'car',
                    'truck'
                ]
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(false);
        });
        it('Should compare two simple objects values (true)', () => {
            const obj1 = {
                prop1: 'hello',
                values: [
                    'velo',
                    'voiture',
                    'camion'
                ]
            };
            const obj2 = {
                prop1: 'hello',
                values: [
                    'bicycle',
                    'car',
                    'truck'
                ],
                default: 'truck'
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values', 'default');
            expect(result).to.be.equal(true);
        });
    });

    describe('getJson(filePath)', () => {
        it('should read existing well formed file and return proper js object');
        it('should read non existing file');
        it('should read existing not JSON file');
        it('should read existing well formed file from another context');
    });

    describe('getDefaultValue(type)', () => {
        it('Test boolean type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.BOOLEAN);
            expect(result).to.equal(false);
        });
        it('Test number type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.NUMBER);
            expect(result).to.equal(0);
        });
        it('Test integer type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.INTEGER);
            expect(result).to.equal(0);
        });
        it('Test string type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.STRING);
            expect(result).to.equal('');
        });
        it('Test null type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.NULL);
            expect(result).to.equal(null);
        });
        it('Test object type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.OBJECT);
            expect(result).to.deep.equal({});
        });
        it('Test array type', () => {
            const result = Utils.getDefaultValue(ValueTypeEnum.ARRAY);
            expect(result).to.deep.equal([]);
        });
    });
});

class DummyObject {
    constructor(
        public foo: number,
        public bar: string,
        public test: any
    ) {}
}
