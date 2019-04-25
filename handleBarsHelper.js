var hbs = require('hbs');

hbs.registerHelper("inc", value => {
    return parseInt(value) + 1;
});