import {expect} from 'chai';
import {describe, it} from 'mocha';
import {Generator} from '../../src/generator';
import {Draft07ModelProvider} from "./utils/draft-07-model-provider";
import {Draft07WithOptionsModelProvider} from "./utils/draft-07-with-options-model-provider";

describe('#Generator', () => {

    describe('getSchema(jsonModel)', () => {
        let generator: Generator;

        it('should schematise a basic objet no inferTitle', () => {
            generator = new Generator({common: {inferTitle: false}});

            const assert = Draft07WithOptionsModelProvider.getSimpleJSONSchemaNoTitle();
            const jsonModel = Draft07ModelProvider.getSimpleJSON();
            const result = generator.getSchema(jsonModel);

            expect(result).to.deep.equal(assert);
        });
    });
});
