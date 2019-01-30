import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AbstractSyntaxTreeBuilder } from '../../src/generator/abstract-synthax-tree-builder';
import { Draft7modelProvider } from './utils/draft7model-provider';

describe('`#AbstractSyntaxTreeBuilder', () => {

    describe('buildPrimitive(node)', () => {
        it('Should return string primitive', () => {
            const assert = {
                type: 'string',
                required: true,
                values: ["A green door"]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().name);
            expect(result).to.deep.equal(assert);
        });
        it('Should return non required string primitive', () => {
            const assert = {
                type: 'string',
                required: false,
                values: [""]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().emptyName);
            expect(result).to.deep.equal(assert);
        });
        it('Should return number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return negative number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [-12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(-Draft7modelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().dimensions.width);
            expect(result).to.deep.equal(assert);
        });
        it('Should return zero integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [0]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().freePrice);
            expect(result).to.deep.equal(assert);
        });
        it('Should return boolean primitive', () => {
            const assert = {
                type: 'boolean',
                required: true,
                values: [false]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().checked);
            expect(result).to.deep.equal(assert);
        });
        it('Should return null primitive', () => {
            const assert = {
                type: 'null',
                required: true,
                values: [null]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(Draft7modelProvider.getJSONData().nullValue);
            expect(result).to.deep.equal(assert);
        });
    });


    describe('buildObject(node)', () => {
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildObject(Draft7modelProvider.getJSONData().dimensions);
            expect(result).to.deep.equal(Draft7modelProvider.getDimensionsAST());
        });
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildObject(Draft7modelProvider.getJSONData().person);
            expect(result).to.deep.equal(Draft7modelProvider.getPersonAST());
        });
        it('Should return empty object tree', () => {
            const assert = {
                type: 'object',
                required: false,
                children: {}
            };
            const result = AbstractSyntaxTreeBuilder.buildObject(Draft7modelProvider.getJSONData().emptyObject);
            expect(result).to.deep.equal(assert);
        });
    });


    describe('buildArray(node)', () => {
        it('Should return string array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(Draft7modelProvider.getJSONData().tags);
            expect(result).to.deep.equal(Draft7modelProvider.getTagsAST());
        });
        it('Should return string non unique array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(Draft7modelProvider.getJSONData().tagsNonUniq);
            expect(result).to.deep.equal(Draft7modelProvider.getTagsNonUniqAST());
        });
        it('Should return object array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(Draft7modelProvider.getJSONData().guests);
            expect(result).to.deep.equal(Draft7modelProvider.getGuestsAST());
        });
        it('Should return etherogene array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(Draft7modelProvider.getJSONData().etherogene);
            expect(result).to.deep.equal(Draft7modelProvider.getEtherogeneAST());
        });
        it('Should return empty array tree', () => {
            const assert = {
                type: 'array',
                required: false,
                children: {},
                uniqueItems: true
            };
            const result = AbstractSyntaxTreeBuilder.buildArray(Draft7modelProvider.getJSONData().emptyArray);
            expect(result).to.deep.equal(assert);
        });

    });


    describe('buildNode(node)', () => {
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().dimensions);
            expect(result).to.deep.equal(Draft7modelProvider.getDimensionsAST());
        });
        it('Should return string primitive', () => {
            const assert = {
                type: 'string',
                required: true,
                values: ['A green door']
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().name);
            expect(result).to.deep.equal(assert);
        });
        it('Should return non required string primitive', () => {
            const assert = {
                type: 'string',
                required: false,
                values: ['']
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().emptyName);
            expect(result).to.deep.equal(assert);
        });
        it('Should return number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return negative number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [-12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(-Draft7modelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().dimensions.width);
            expect(result).to.deep.equal(assert);
        });
        it('Should return zero integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [0]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().freePrice);
            expect(result).to.deep.equal(assert);
        });
        it('Should return boolean primitive', () => {
            const assert = {
                type: 'boolean',
                required: true,
                values: [false]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().checked);
            expect(result).to.deep.equal(assert);
        });
        it('Should return null primitive', () => {
            const assert = {
                type: 'null',
                required: true,
                values: [null]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData().nullValue);
            expect(result).to.deep.equal(assert);
        });
    });

    describe('test full object tree', () => {
        it('#test', () => {
            const result = AbstractSyntaxTreeBuilder.buildNode(Draft7modelProvider.getJSONData());
            console.log(JSON.stringify(result));
        });
    });
});
