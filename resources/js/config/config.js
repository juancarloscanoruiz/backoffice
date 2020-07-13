//Cleave.js configuration
let cleaveConfig = {
    date: true,
    delimiter: "-",
    datePattern: ["d", "m", "Y"]
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
