//Cleave.js configuration
let cleaveConfig = {
    date: true,
    delimiter: "-",
    datePattern: ["Y", "d", "m"]
};

let scheduleTimeConfig = {
    time: true,
    timePattern: ["h", "m"]
};

let timeWithSeconds = {
    time: true,
    timePattern: ["h", "m", "s"]
};

let year = {
    date: true,
    datePattern: ["Y"]
};

export { cleaveConfig, scheduleTimeConfig, timeWithSeconds, year };
