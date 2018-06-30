export interface AbstractSyntaxTreeModel {
    type: string;
    required: boolean;
    children?: any;
    uniqueItems?: boolean;
    values?: any[];
}