"use strict";
// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.handleReturnType = exports.queryOutput = exports.queryOkJSON = exports.queryJSON = exports._genValidGasLimitAndValue = void 0;
var types_1 = require("./types");
var DEF_GAS_LIMIT_AND_VALUE = {
    value: 0,
    gasLimit: -1
};
/**
 * @throws { QueryCallError }
 */
function queryJSON(nativeContract, callerAddress, title, args, gasLimitAndValue, handler) {
    if (handler === void 0) { handler = function (json) {
        return json;
    }; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, output, gasConsumed, _value, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, queryOutput(nativeContract, callerAddress, title, args, gasLimitAndValue)];
                case 1:
                    _a = _b.sent(), output = _a.output, gasConsumed = _a.gasConsumed;
                    _value = output.toJSON();
                    if (_value && typeof _value === 'object') {
                        if ('err' in _value) {
                            error = {
                                issue: 'READ_ERR_IN_BODY',
                                _err: _value.err
                            };
                            throw error;
                        }
                        if ('ok' in _value)
                            _value = _value.ok;
                    }
                    return [2 /*return*/, {
                            value: handler(output.toJSON()),
                            gasConsumed: gasConsumed
                        }];
            }
        });
    });
}
exports.queryJSON = queryJSON;
/**
 * For mutating methods, that return { ok, err } responses.
 *
 * @throws { QueryOkCallError }
 */
function queryOkJSON(nativeContract, callerAddress,
//
title, args, gasLimitAndValue, handler) {
    if (handler === void 0) { handler = function (json) {
        return json;
    }; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, output, gasConsumed, _value, error, error, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, queryOutput(nativeContract, callerAddress, title, args, gasLimitAndValue)];
                case 1:
                    _a = _b.sent(), output = _a.output, gasConsumed = _a.gasConsumed;
                    _value = output.toJSON();
                    if (_value == null || typeof _value !== 'object') {
                        error = {
                            issue: 'BODY_ISNT_OKERR',
                            value: _value
                        };
                        throw error;
                    }
                    if ('err' in _value) {
                        error = {
                            issue: 'READ_ERR_IN_BODY',
                            _err: _value.err
                        };
                        throw error;
                    }
                    if (!('ok' in _value)) {
                        error = {
                            issue: 'BODY_ISNT_OKERR',
                            value: _value
                        };
                        throw error;
                    }
                    return [2 /*return*/, {
                            value: handler(_value.ok),
                            gasConsumed: gasConsumed
                        }];
            }
        });
    });
}
exports.queryOkJSON = queryOkJSON;
/**
 * @throws { QueryCallError }
 */
function queryOutput(nativeContract, callerAddress,
//
title, args, gasLimitAndValue) {
    return __awaiter(this, void 0, void 0, function () {
        var contractAddress, error_1, _args, _gasLimitAndValue, response, error, caughtError_1, gasConsumed, result, output, resValueStr, resValueJSON;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    contractAddress = nativeContract.address.toString();
                    if (nativeContract.query[title] == null) {
                        error_1 = {
                            issue: 'METHOD_DOESNT_EXIST',
                            texts: ["Method name: '".concat(title, "'")]
                        };
                        throw error_1;
                    }
                    _args = args || [];
                    _gasLimitAndValue = _genValidGasLimitAndValue(gasLimitAndValue);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (_a = nativeContract.query)[title].apply(_a, __spreadArray([callerAddress,
                            _gasLimitAndValue], _args, false))];
                case 2:
                    response = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    caughtError_1 = _b.sent();
                    error = {
                        issue: 'FAIL_AT_CALL',
                        caughtError: caughtError_1
                    };
                    console.error("\nContract.queryString(".concat(title, ") error:"), "\n > error:", error, '\n');
                    throw error;
                case 4:
                    gasConsumed = response.gasConsumed, result = response.result, output = response.output;
                    resValueStr = output ? output.toString() : null;
                    resValueJSON = output ? output.toJSON() : null;
                    if (result.isErr)
                        error = {
                            issue: 'FAIL_AFTER_CALL::IS_ERROR',
                            _resultIsOk: result.isOk,
                            _asError: result.isErr ? result.asErr : undefined
                        };
                    if (result.isOk === false)
                        error = {
                            issue: 'FAIL_AFTER_CALL::RESULT_NOT_OK',
                            _asError: result.isErr ? result.asErr : undefined
                        };
                    if (output == null)
                        error = {
                            issue: 'OUTPUT_IS_NULL'
                        };
                    if (error)
                        throw error;
                    return [2 /*return*/, {
                            output: output,
                            gasConsumed: gasConsumed.toBigInt()
                        }];
            }
        });
    });
}
exports.queryOutput = queryOutput;
function _genValidGasLimitAndValue(gasLimitAndValue) {
    if (gasLimitAndValue == null)
        return DEF_GAS_LIMIT_AND_VALUE;
    var value = gasLimitAndValue.value, gasLimit = gasLimitAndValue.gasLimit;
    if (!value)
        value = 0;
    if (gasLimit == null)
        gasLimit = -1;
    return { value: value, gasLimit: gasLimit };
}
exports._genValidGasLimitAndValue = _genValidGasLimitAndValue;
function handleReturnType(result, typeDescription) {
    if (!result)
        return result;
    if (typeof result !== 'object' || typeof typeDescription !== 'object' || typeDescription.isPrimitive)
        return result;
    if (typeDescription.name === 'ReturnNumber')
        return new types_1.ReturnNumber(result);
    Object.entries(result).forEach(function (obj) {
        result[obj[0]] = handleReturnType(obj[1], typeDescription.body[obj[0]]);
    });
    return result;
}
exports.handleReturnType = handleReturnType;
