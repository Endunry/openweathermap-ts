"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe("testing initial state and state getters and setters", function () {
    var randomDate = Date.now().toString();
    var openWeather = new app_1.default({
        apiKey: randomDate,
    });
    it("getSettings with no arguments should return default settings", function () {
        expect(openWeather.getAllSettings()).toEqual({
            apiKey: randomDate,
            units: 'imperial',
            language: 'en',
        });
    });
    it("setUnits should correctly update the settings value", function () {
        openWeather.setUnits('metric');
        var units = openWeather.getAllSettings().units;
        expect(units).toBe('metric');
    });
    it("clearSettings should reset settings to defaults with the existing API key", function () {
        openWeather.setApiKey('heyThere123');
        openWeather.clearSettings();
        var apiKey = openWeather.getAllSettings().apiKey;
        expect(apiKey).toBe('youNeedValidApiKey');
    });
    it("should test getAllLocations function to get location object with initial values", function () {
        var location = openWeather.getAllLocations();
        expect(location).toStrictEqual({
            city: {},
            cityId: undefined,
            geoCoordinates: {},
            zipcode: {},
        });
    });
    it("should use setCityName correctly", function () {
        openWeather.setCityName({
            cityName: 'Austin',
            state: 'Tx',
        });
        var city = openWeather.getAllLocations().city;
        expect(city).toStrictEqual({
            cityName: 'Austin',
            state: 'Tx',
            countryCode: undefined,
        });
    });
    it("should use clearLocation correctly", function () {
        openWeather.setCityName({
            cityName: 'Austin',
            state: 'Tx',
        });
        openWeather.clearLocation();
        var location = openWeather.getAllLocations();
        expect(location).toStrictEqual({
            city: {},
            cityId: undefined,
            geoCoordinates: {},
            zipcode: {},
        });
    });
});
