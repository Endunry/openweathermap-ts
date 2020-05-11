"use strict";
// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
Object.defineProperty(exports, "__esModule", { value: true });
class OpenWeatherMap {
    constructor({ apiKey, units = 'imperial', langauge = 'en' }) {
        this.settings = {
            apiKey,
            units,
            langauge,
        };
    }
    getSettings(key) {
        if (this.settings[key]) {
            return this.settings[key];
        }
        return this.settings;
    }
}
const newMap = new OpenWeatherMap({
    apiKey: 'asdfasdfasdf',
});
console.log(newMap.getSettings());
// console.log(newMap.setApiKey('qwpeorqjwe'))
//# sourceMappingURL=app.js.map