"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("../app");
describe('Tests Get Methods in app.ts', function () {
    var openWeather = new app_1.default({
        apiKey: Date.now().toString(),
    });
    describe('getByCityName children methods throw errors without an argument or location object', function () {
        test('getCurrentWeatherByCityName()', function () {
            openWeather.getCurrentWeatherByCityName().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('cityName missing, please pass it via argument or set it using setCityName method');
            });
        });
        test('getCurrentWeatherByCityName()', function () {
            openWeather.getCurrentWeatherByCityName().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('cityName missing, please pass it via argument or set it using setCityName method');
            });
        });
        test('getThreeHourForecastByCityName()', function () {
            openWeather.getThreeHourForecastByCityName().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('cityName missing, please pass it via argument or set it using setCityName method');
            });
        });
    });
    describe('getByCityId children methods throw errors without an argument or location object', function () {
        test('getCurrentWeatherByCityId', function () {
            openWeather.getCurrentWeatherByCityId().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('cityId missing, please pass it via argument or set it using setCityId method');
            });
        });
        test('getCurrentWeatherByCityId', function () {
            openWeather.getThreeHourForecastByCityId().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('cityId missing, please pass it via argument or set it using setCityId method');
            });
        });
    });
    describe('getByGeoCoordinates children methods throw errors without an argument or location object', function () {
        test('getCurrentWeatherByGeoCoordinates', function () {
            openWeather.getCurrentWeatherByGeoCoordinates().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method');
            });
        });
        test('getThreeHourForecastByGeoCoordinates', function () {
            openWeather
                .getThreeHourForecastByGeoCoordinates()
                .catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('latitude or longitude missing, please pass it via argument or set it using setGeoCoordinates method');
            });
        });
    });
    describe('getByZipcode children methods throw errors without an argument or location object', function () {
        test('getCurrentWeatherByZipcode', function () {
            openWeather.getCurrentWeatherByZipcode().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('zipcode missing, please pass it via argument or set it using setZipcode method');
            });
        });
        test('getThreeHourForecastByZipcode', function () {
            openWeather.getThreeHourForecastByZipcode().catch(function (_a) {
                var message = _a.message;
                expect(message).toBe('zipcode missing, please pass it via argument or set it using setZipcode method');
            });
        });
    });
});
