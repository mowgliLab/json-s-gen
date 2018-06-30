import { Utils } from './utils';
import { ValueTypeEnum } from './enums/value-type.enum';
import * as _ from 'lodash';
import { AbstractSyntaxTreeModel } from './models/abstract-syntax-tree.model';

export class AbstractSyntaxTreeBuilder {

    private tree: any;

    private constructor() {
        this.tree = {};
    }

    static buildTree(jsonModel: any) {

    }

    static buildPrimitive(node: any): AbstractSyntaxTreeModel {
        const type = Utils.getType(node);
        const required = type === ValueTypeEnum.STRING ? !!node : true;
        const values = [node];

        return {type, required, values};
    }

    static buildObject(node: any): AbstractSyntaxTreeModel {
        const type = Utils.getType(node);

        const keys = Object.keys(node);
        const required = keys.length > 0;
        let children = {};

        if (required) {
            children = keys.map(k => {
                return {[k]: AbstractSyntaxTreeBuilder.buildNode(node[k])};
            }).reduce((previousValue, currentValue) => {
                return _.assign(previousValue, currentValue);
            });
        }

        return {type, required, children};
    }

    static buildArray(node: Array<any>): AbstractSyntaxTreeModel {
        const type = Utils.getType(node);
        const required = node.length > 0;

        // build children.
        const arrayWithDuplicates = node.map((value) => {
            return AbstractSyntaxTreeBuilder.buildNode(value);
        });
        const uniqArray = _.transform(arrayWithDuplicates, (acc: AbstractSyntaxTreeModel[], curr: AbstractSyntaxTreeModel) => {
            const similarEntry = _.filter(acc, value => Utils.isEqualWithout(value, curr, 'values'));
            if (similarEntry.length === 0) {
                acc.push(curr);
            } else {
                const ast = similarEntry[0] as AbstractSyntaxTreeModel;
                if (ast.values && curr.values) ast.values.push(...curr.values);
            }
        });

        const children = {
            ...uniqArray
        };

        // get uniqueItems
        const uniqueValueLength = _.uniqWith(node, _.isEqual).length;
        const uniqueItems = uniqueValueLength === node.length;

        return {type, required, children, uniqueItems};
    }

    /**
     * Orchestrator
     * @param node
     * @return {AbstractSyntaxTreeModel}
     */
    static buildNode(node: any) {
        const type = Utils.getType(node);

        if (type === ValueTypeEnum.OBJECT) {
            return AbstractSyntaxTreeBuilder.buildObject(node);
        } else if (type === ValueTypeEnum.ARRAY) {
            return AbstractSyntaxTreeBuilder.buildArray(node);
        } else {
            return AbstractSyntaxTreeBuilder.buildPrimitive(node);
        }
    }

}