import { UseFieldArrayOptions, Control, ArrayField } from './types';
export declare const useFieldArray: <TFieldArrayValues extends Record<string, any> = Record<string, any>, TKeyName extends string = "id", TControl extends Control<Record<string, any>> = Control<Record<string, any>>>({ control, name, keyName, }: UseFieldArrayOptions<TKeyName, TControl>) => {
    swap: (indexA: number, indexB: number) => void;
    move: (from: number, to: number) => void;
    prepend: (value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[], shouldFocus?: boolean) => void;
    append: (value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[], shouldFocus?: boolean) => void;
    remove: (index?: number | number[] | undefined) => void;
    insert: (index: number, value: Partial<TFieldArrayValues> | Partial<TFieldArrayValues>[], shouldFocus?: boolean) => void;
    fields: Partial<ArrayField<TFieldArrayValues, TKeyName>>[];
};