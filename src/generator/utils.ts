import * as _ from 'lodash';
import { ValueTypeEnum } from './enums/value-type.enum';

export class Utils {

    /**
     * Read and return JSON from file path.
     * @param {string} filePath a string or a path to the file.
     */
    static getJson(filePath: string) {
        console.log('TODO return the json from file path');
    }

    /**
     * Get the type of value as a string.
     * @param value the value to get the type as string
     * @return {string} the type of the value.
     */
    static getType(value: any): string {
        if (_.isArray(value)) {
            return ValueTypeEnum.ARRAY;
        } else if (_.isBoolean(value)) {
            return ValueTypeEnum.BOOLEAN;
        } else if (_.isString(value)) {
            return ValueTypeEnum.STRING;
        } else if (_.isInteger(value)) {
            return ValueTypeEnum.INTEGER;
        } else if (_.isNumber(value)) {
            return ValueTypeEnum.NUMBER;
        } else if (_.isObject(value)) {
            return ValueTypeEnum.OBJECT;
        } else {
            return ValueTypeEnum.NULL;
        }
    }

    /**
     * Return default value depending on type.
     * @param {string} type
     * @return {any}
     */
    static getDefaultValue(type: string): any {
        switch (type) {
            case ValueTypeEnum.BOOLEAN:
                return false;
            case ValueTypeEnum.NUMBER:
            case ValueTypeEnum.INTEGER:
                return 0;
            case ValueTypeEnum.STRING:
                return '';
            case ValueTypeEnum.NULL:
                return null;
            case ValueTypeEnum.ARRAY:
                return [];
            case ValueTypeEnum.OBJECT:
                return {};
        }
    }

    /**
     * Test deep equality between two object with the possibility to omit recursively
     * some properties.
     * @param obj1: the first object to compare.
     * @param obj2: the second object to compare.
     * @param {string} omits: one or many names of properties to omit recursively.
     * @return {boolean}: whether the two object are identical or not.
     */
    static isEqualWithout(obj1: any, obj2: any, ...omits: string[]): boolean {
        if (_.isObject(obj1) && _.isObject(obj2)) {
            const keys = Object.keys(obj1);
            return keys.every(k => {
                if (omits.indexOf(k) === -1) {
                    return Utils.isEqualWithout(obj1[k], obj2[k], ...omits);
                }
                return true;
            });
        } else {
            return obj1 === obj2;
        }
    }
}
