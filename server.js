const express = require('express');
const app = express();
const hbs = require('hbs');
const routes = require('./routes/index');
const methodOverride = require('method-override');
const logger = require('morgan');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.use('/', routes);
/* app.use('/api/v1', apiRoutes) */

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});