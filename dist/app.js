"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var OpenWeather_1 = require("./OpenWeather");
var helpers_1 = require("./helpers");
var OpenWeatherMap = /** @class */ (function (_super) {
    __extends(OpenWeatherMap, _super);
    function OpenWeatherMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenWeatherMap.prototype.getCurrentWeatherByCityName = function (location) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var currentWeather, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getByCityName({
                                location: location,
                                queryType: helpers_1.WEATHER
                            })];
                    case 1:
                        currentWeather = (_a.sent());
                        resolve(currentWeather);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeatherMap.prototype.getCurrentWeatherByCityId = function (cityId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var currentWeather, error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.getByCityId({
                                            cityId: cityId,
                                            queryType: helpers_1.WEATHER
                                        })];
                                case 1:
                                    currentWeather = (_a.sent());
                                    resolve(currentWeather);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    reject(error_2);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    OpenWeatherMap.prototype.getCurrentWeatherByGeoCoordinates = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var currentWeather, error_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.getByGeoCoordinates({
                                            latitude: latitude,
                                            longitude: longitude,
                                            queryType: helpers_1.FORECAST
                                        })];
                                case 1:
                                    currentWeather = (_a.sent());
                                    resolve(currentWeather);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_3 = _a.sent();
                                    reject(error_3);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    OpenWeatherMap.prototype.getCurrentWeatherByZipcode = function (zipcode, countryCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var currentWeather, error_4;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.getByZipcode(zipcode, helpers_1.WEATHER, countryCode)];
                                case 1:
                                    currentWeather = (_a.sent());
                                    resolve(currentWeather);
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_4 = _a.sent();
                                    reject(error_4);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    OpenWeatherMap.prototype.getThreeHourForecastByCityName = function (location) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var currentWeather, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getByCityName({
                                location: location,
                                queryType: helpers_1.FORECAST
                            })];
                    case 1:
                        currentWeather = (_a.sent());
                        resolve(currentWeather);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        reject(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeatherMap.prototype.getThreeHourForecastByCityId = function (cityId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var currentWeather, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getByCityId({
                                cityId: cityId,
                                queryType: helpers_1.FORECAST
                            })];
                    case 1:
                        currentWeather = (_a.sent());
                        resolve(currentWeather);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        reject(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeatherMap.prototype.getThreeHourForecastByGeoCoordinates = function (latitude, longitude) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var currentWeather, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getByGeoCoordinates({
                                latitude: latitude,
                                longitude: longitude,
                                queryType: helpers_1.FORECAST
                            })];
                    case 1:
                        currentWeather = (_a.sent());
                        resolve(currentWeather);
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        reject(error_7);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeatherMap.prototype.getThreeHourForecastByZipcode = function (zipcode, countryCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var currentWeather, error_8;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.getByZipcode(zipcode, helpers_1.FORECAST, countryCode)];
                                case 1:
                                    currentWeather = (_a.sent());
                                    return [2 /*return*/, resolve(currentWeather)];
                                case 2:
                                    error_8 = _a.sent();
                                    reject(error_8);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return OpenWeatherMap;
}(OpenWeather_1.default));
exports.default = OpenWeatherMap;
