exports.config = {  
    seleniumAddress: 'http://localhost:4444/wd/hub',  
    specs: ['заполнение_шага_2.js'],
    baseURL: 'http://localhost:8080/',  
    framework: 'jasmine',
    getPageTimeout: process.env.MY_TIMEOUT || 60000,
    allScriptsTimeout: 500000,
    capabilities: {
        browserName: 'chrome'
    }  
};