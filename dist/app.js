// pi.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
class OpenWeatherMap {
    constructor({ apiKey, units = 'imperial', langauge = 'en' }) {
        this.apiKey = apiKey;
        this.units = units;
        this.langauge = langauge;
    }
    getApiKey() {
        return this.apiKey;
    }
    getUnits() {
        return this.units;
    }
    getLanguage() {
        return this.langauge;
    }
    setApiKey(apiKey) {
        this.apiKey = apiKey;
        return this.apiKey;
    }
}
const newMap = new OpenWeatherMap({
    apiKey: 'asdfasdfasdf',
});
console.log(newMap.getApiKey());
console.log(newMap.setApiKey('qwpeorqjwe'));
//# sourceMappingURL=app.js.map