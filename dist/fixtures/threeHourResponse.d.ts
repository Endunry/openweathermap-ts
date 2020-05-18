export declare const threeHourResponse: {
    cod: string;
    message: number;
    cnt: number;
    list: ({
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
        rain?: undefined;
        snow?: undefined;
    } | {
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
        };
        rain: {
            '3h': number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
        snow?: undefined;
    } | {
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
        };
        rain: {
            '3h': number;
        };
        snow: {
            '3h': number;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
    } | {
        dt: number;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level: number;
            grnd_level: number;
            humidity: number;
            temp_kf: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        clouds: {
            all: number;
        };
        wind: {
            speed: number;
            deg: number;
        };
        rain: {
            '3h'?: undefined;
        };
        snow: {
            '3h'?: undefined;
        };
        sys: {
            pod: string;
        };
        dt_txt: string;
    })[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
    };
};
