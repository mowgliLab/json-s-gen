import { expect } from 'chai';
import { describe, it } from 'mocha';
import { AbstractSyntaxTreeBuilder } from '../../src/generator/abstract-synthax-tree-builder';
import { ModelProvider } from './utils/model-provider';

describe('`#AbstractSyntaxTreeBuilder', () => {

    describe('buildPrimitive(node)', () => {
        it('Should return string primitive', () => {
            const assert = {
                type: 'string',
                required: true,
                values: ["A green door"]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().name);
            expect(result).to.deep.equal(assert);
        });
        it('Should return non required string primitive', () => {
            const assert = {
                type: 'string',
                required: false,
                values: [""]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().emptyName);
            expect(result).to.deep.equal(assert);
        });
        it('Should return number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return negative number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [-12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(-ModelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [5]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().dimensions.width);
            expect(result).to.deep.equal(assert);
        });
        it('Should return zero integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [0]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().freePrice);
            expect(result).to.deep.equal(assert);
        });
        it('Should return boolean primitive', () => {
            const assert = {
                type: 'boolean',
                required: true,
                values: [false]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().checked);
            expect(result).to.deep.equal(assert);
        });
        it('Should return null primitive', () => {
            const assert = {
                type: 'null',
                required: true,
                values: [null]
            };
            const result = AbstractSyntaxTreeBuilder.buildPrimitive(ModelProvider.getJSONData().nullValue);
            expect(result).to.deep.equal(assert);
        });
    });


    describe('buildObject(node)', () => {
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildObject(ModelProvider.getJSONData().dimensions);
            expect(result).to.deep.equal(ModelProvider.getDimensionsAST());
        });
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildObject(ModelProvider.getJSONData().person);
            expect(result).to.deep.equal(ModelProvider.getPersonAST());
        });
        it('Should return empty object tree', () => {
            const assert = {
                type: 'object',
                required: false,
                children: {}
            };
            const result = AbstractSyntaxTreeBuilder.buildObject(ModelProvider.getJSONData().emptyObject);
            expect(result).to.deep.equal(assert);
        });
    });


    describe('buildArray(node)', () => {
        it('Should return string array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(ModelProvider.getJSONData().tags);
            expect(result).to.deep.equal(ModelProvider.getTagsAST());
        });
        it('Should return string non unique array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(ModelProvider.getJSONData().tagsNonUniq);
            expect(result).to.deep.equal(ModelProvider.getTagsNonUniqAST());
        });
        it('Should return object array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(ModelProvider.getJSONData().guests);
            expect(result).to.deep.equal(ModelProvider.getGuestsAST());
        });
        it('Should return etherogene array tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildArray(ModelProvider.getJSONData().etherogene);
            expect(result).to.deep.equal(ModelProvider.getEtherogeneAST());
        });
        it('Should return empty array tree', () => {
            const assert = {
                type: 'array',
                required: false,
                children: {},
                uniqueItems: true
            };
            const result = AbstractSyntaxTreeBuilder.buildArray(ModelProvider.getJSONData().emptyArray);
            expect(result).to.deep.equal(assert);
        });

    });


    describe('buildNode(node)', () => {
        it('Should return object tree', () => {
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().dimensions);
            expect(result).to.deep.equal(ModelProvider.getDimensionsAST());
        });
        it('Should return string primitive', () => {
            const assert = {
                type: 'string',
                required: true,
                values: ['A green door']
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().name);
            expect(result).to.deep.equal(assert);
        });
        it('Should return non required string primitive', () => {
            const assert = {
                type: 'string',
                required: false,
                values: ['']
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().emptyName);
            expect(result).to.deep.equal(assert);
        });
        it('Should return number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return negative number primitive', () => {
            const assert = {
                type: 'number',
                required: true,
                values: [-12.5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(-ModelProvider.getJSONData().price);
            expect(result).to.deep.equal(assert);
        });
        it('Should return integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [5]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().dimensions.width);
            expect(result).to.deep.equal(assert);
        });
        it('Should return zero integer primitive', () => {
            const assert = {
                type: 'integer',
                required: true,
                values: [0]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().freePrice);
            expect(result).to.deep.equal(assert);
        });
        it('Should return boolean primitive', () => {
            const assert = {
                type: 'boolean',
                required: true,
                values: [false]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().checked);
            expect(result).to.deep.equal(assert);
        });
        it('Should return null primitive', () => {
            const assert = {
                type: 'null',
                required: true,
                values: [null]
            };
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData().nullValue);
            expect(result).to.deep.equal(assert);
        });
    });

    describe('test full object tree', () => {
        it('#test', () => {
            const result = AbstractSyntaxTreeBuilder.buildNode(ModelProvider.getJSONData());
            console.log(JSON.stringify(result));
        });
    });
});
