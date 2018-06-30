import { expect } from 'chai';
import { describe,it } from 'mocha';
import { Utils } from '../../src/generator/utils';

describe('#Utils', () => {

    describe(' getType(value)', () => {
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

    describe('isEqualWithout(obj1, obj2, ...omitValues', () => {
        it('Should test comparator of ast without values', () => {
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
        it('Should test comparator of ast without values', () => {
            const obj1 = 'hello';
            const obj2 = 'world';
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(false);
        });
        it('Should test comparator of ast without values', () => {
            const obj = {
                "0": {
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
                },
                "1": {
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
                }
            };
            const result = Utils.isEqualWithout(obj['0'], obj['1'], 'values');
            expect(result).to.be.equal(true);
        });
        it('Should test comparator of ast without values', () => {
            const obj1 = 'hello';
            const obj2 = 'hello';
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(true);
        });
        it('Should test comparator of ast without values', () => {
            const obj1 = {
                prop1: 'hello'
            };
            const obj2 = {
                prop1: 'hello'
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(true);
        });
        it('Should test comparator of ast without values', () => {
            const obj1 = {
                prop1: 'hello'
            };
            const obj2 = {
                prop1: 'world'
            };
            const result = Utils.isEqualWithout(obj1, obj2, 'values');
            expect(result).to.be.equal(false);
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
