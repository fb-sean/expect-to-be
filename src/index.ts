import { ExpectTypes } from "./enums";

export function expectObject(v: any): boolean {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
}

export function expectEmptyObject(obj: object): boolean {
    if (!expectObject(obj)) {
        return false;
    }


    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

export function expectNull(v: any): boolean {
    return v === null;
}

export function expectNumber(v: any): boolean {
    return typeof v === 'number' ? !isNaN(v) : (typeof v === 'string' && Number.isFinite(parseFloat(v.trim())));
}

export function expectString(v: any): boolean {
    return typeof v === 'string';
}

export function expectEmptyString(str: string): boolean {
    return expectString(str) && str.trim() === "";
}

export function expectBoolean(v: any): boolean {
    return typeof v === 'boolean';
}

export function expectArray(v: any): boolean {
    return Array.isArray(v);
}

export function expectEmptyArray(arr: []): boolean {
    return expectArray(arr) && arr.length === 0;
}

export function expect(v: any, name: ExpectType = ExpectTypes.object) {
    switch (name) {
        case ExpectTypes.emptyObject: {
            return expectEmptyObject(v);
        }
        case ExpectTypes.null: {
            return expectNull(v);
        }
        case ExpectTypes.string: {
            return expectString(v);
        }
        case ExpectTypes.emptyString: {
            return expectEmptyString(v);
        }
        case ExpectTypes.boolean: {
            return expectBoolean(v);
        }
        case ExpectTypes.array: {
            return expectArray(v);
        }
        case ExpectTypes.emptyArray: {
            return expectEmptyArray(v);
        }
        case ExpectTypes.object:
        default: {
            return expectObject(v);
        }
    }
}