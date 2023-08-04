"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.expectEmptyArray = exports.expectArray = exports.expectBoolean = exports.expectEmptyString = exports.expectString = exports.expectNumber = exports.expectNull = exports.expectEmptyObject = exports.expectObject = void 0;
const enums_1 = require("./enums");
function expectObject(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
}
exports.expectObject = expectObject;
function expectEmptyObject(obj) {
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
exports.expectEmptyObject = expectEmptyObject;
function expectNull(v) {
    return v === null;
}
exports.expectNull = expectNull;
function expectNumber(v) {
    return typeof v === 'number' ? !isNaN(v) : (typeof v === 'string' && Number.isFinite(parseFloat(v.trim())));
}
exports.expectNumber = expectNumber;
function expectString(v) {
    return typeof v === 'string';
}
exports.expectString = expectString;
function expectEmptyString(str) {
    return expectString(str) && str.trim() === "";
}
exports.expectEmptyString = expectEmptyString;
function expectBoolean(v) {
    return typeof v === 'boolean';
}
exports.expectBoolean = expectBoolean;
function expectArray(v) {
    return Array.isArray(v);
}
exports.expectArray = expectArray;
function expectEmptyArray(arr) {
    return expectArray(arr) && arr.length === 0;
}
exports.expectEmptyArray = expectEmptyArray;
function expect(v, name = enums_1.ExpectTypes.object) {
    switch (name) {
        case enums_1.ExpectTypes.emptyObject: {
            return expectEmptyObject(v);
        }
        case enums_1.ExpectTypes.null: {
            return expectNull(v);
        }
        case enums_1.ExpectTypes.string: {
            return expectString(v);
        }
        case enums_1.ExpectTypes.emptyString: {
            return expectEmptyString(v);
        }
        case enums_1.ExpectTypes.boolean: {
            return expectBoolean(v);
        }
        case enums_1.ExpectTypes.array: {
            return expectArray(v);
        }
        case enums_1.ExpectTypes.emptyArray: {
            return expectEmptyArray(v);
        }
        case enums_1.ExpectTypes.object:
        default: {
            return expectObject(v);
        }
    }
}
exports.expect = expect;
