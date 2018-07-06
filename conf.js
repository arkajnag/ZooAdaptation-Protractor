exports.config= {
    framework: 'jasmine',
    SeleniumAddress:"http://localhost:4444/wd/hub/",
    specs:['AnimalSelection.js'],
    SELENIUM_PROMISE_MANAGER: false
};