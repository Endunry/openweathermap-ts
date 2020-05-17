"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var node_fetch_1 = require("node-fetch");
var helpers_1 = require("./helpers");
var OpenWeather = /** @class */ (function () {
    function OpenWeather(_a) {
        var apiKey = _a.apiKey, _b = _a.units, units = _b === void 0 ? 'imperial' : _b, _c = _a.language, language = _c === void 0 ? 'en' : _c;
        this.settings = {
            apiKey: apiKey,
            units: units,
            language: language,
        };
        this.location = {
            city: {},
            cityId: undefined,
            geoCoordinates: {},
            zipcode: {},
        };
        this.BASE_URL = helpers_1.HOST + helpers_1.API_VERSION;
    }
    // ***
    // ***
    // Setters
    // ***
    // ***
    OpenWeather.prototype.setApiKey = function (apiKey) {
        this.settings.apiKey = apiKey;
    };
    OpenWeather.prototype.setUnits = function (units) {
        this.settings.units = units;
    };
    OpenWeather.prototype.setLanguage = function (language) {
        this.settings.language = language;
    };
    OpenWeather.prototype.setCityName = function (_a) {
        var cityName = _a.cityName, state = _a.state, countryCode = _a.countryCode;
        this.location.city = __assign(__assign({}, this.location.city), { cityName: cityName,
            state: state,
            countryCode: countryCode });
    };
    OpenWeather.prototype.setCityId = function (cityId) {
        this.location.cityId = cityId;
    };
    OpenWeather.prototype.setGeoCoordinates = function (latitude, longitude) {
        this.location.geoCoordinates = __assign(__assign({}, this.location.geoCoordinates), { latitude: latitude,
            longitude: longitude });
    };
    OpenWeather.prototype.setZipCode = function (zipcode, countryCode) {
        this.location.zipcode = __assign(__assign({}, this.location.zipcode), { zipcode: zipcode,
            countryCode: countryCode });
    };
    OpenWeather.prototype.clearSettings = function () {
        this.settings = {
            apiKey: 'youNeedValidApiKey',
            units: 'imperial',
            language: 'en',
        };
    };
    OpenWeather.prototype.clearLocation = function () {
        this.location = {
            city: {},
            cityId: undefined,
            geoCoordinates: {},
            zipcode: {},
        };
    };
    // ***
    // ***
    // Getters
    // ***
    // ***
    OpenWeather.prototype.getAllSettings = function () {
        return this.settings;
    };
    OpenWeather.prototype.getAllLocations = function () {
        return this.location;
    };
    // ***
    // ***
    // Private
    // ***
    // ***
    OpenWeather.prototype.buildURL = function (queryType, query) {
        var _a = this, BASE_URL = _a.BASE_URL, settings = _a.settings;
        return BASE_URL + queryType + "?" + query + "&appid=" + settings.apiKey;
    };
    // ***
    // ***
    // protected
    // ***
    // ***
    OpenWeather.prototype.getByCityName = function (_a) {
        var _this = this;
        var location = _a.location, queryType = _a.queryType;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var cityName, state, countryCode, query, request, response, currentWeather, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(location === null || location === void 0 ? void 0 : location.cityName) && !this.location.city.cityName) {
                            throw new Error("cityName missing, please pass it via argument or set it using setCityName method");
                        }
                        cityName = (location === null || location === void 0 ? void 0 : location.cityName) || this.location.city.cityName;
                        state = (location === null || location === void 0 ? void 0 : location.state) || this.location.city.state;
                        countryCode = (location === null || location === void 0 ? void 0 : location.countryCode) || this.location.city.countryCode;
                        query = "q=" + cityName + (state ? ',' + state : '') + (countryCode ? ',' + countryCode : '');
                        request = this.buildURL(queryType, query);
                        return [4 /*yield*/, node_fetch_1.default(request)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        currentWeather = _a.sent();
                        resolve(currentWeather);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeather.prototype.getByCityId = function (_a) {
        var _this = this;
        var cityId = _a.cityId, queryType = _a.queryType;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var location_1, query, request, response, currentWeather, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        location_1 = this.location;
                        if (!cityId && !location_1.cityId) {
                            throw new Error("cityId missing, please pass it via argument or set it using setCityId method");
                        }
                        cityId = cityId || location_1.cityId;
                        query = "id=" + cityId;
                        request = this.buildURL(queryType, query);
                        return [4 /*yield*/, node_fetch_1.default(request)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        currentWeather = _a.sent();
                        resolve(currentWeather);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeather.prototype.getByGeoCoordinates = function (_a) {
        var _this = this;
        var latitude = _a.latitude, longitude = _a.longitude, queryType = _a.queryType;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var query, request, response, currentWeather, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if ((!latitude || !longitude) &&
                            (!this.location.geoCoordinates.latitude ||
                                !this.location.geoCoordinates.longitude)) {
                            throw new Error("latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method");
                        }
                        latitude = latitude || this.location.geoCoordinates.latitude;
                        longitude = longitude || this.location.geoCoordinates.longitude;
                        query = "lat=" + latitude + "&lon=" + longitude;
                        request = this.buildURL(queryType, query);
                        return [4 /*yield*/, node_fetch_1.default(request)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        currentWeather = _a.sent();
                        resolve(currentWeather);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        reject(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    OpenWeather.prototype.getByZipcode = function (zipcode, queryType, countryCode) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var location_2, query, request, response, currentWeather, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        location_2 = this.location;
                        if (!zipcode || !location_2.zipcode.zipcode) {
                            throw new Error("zipcode missing, please pass it via argument or set it using setZipcode method");
                        }
                        zipcode = zipcode || location_2.zipcode.zipcode;
                        query = "zip=" + zipcode + (countryCode ? ',' + countryCode : '');
                        request = this.buildURL(queryType, query);
                        return [4 /*yield*/, node_fetch_1.default(request)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        currentWeather = _a.sent();
                        resolve(currentWeather);
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        reject(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    return OpenWeather;
}());
exports.default = OpenWeather;
