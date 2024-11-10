//--------Создание веб сервера на express-----------------
const express = require('express');
const path = require('path');
const app = express();
const eh = require('express-handlebars');

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const serviceRoutes = require('./routes/service');

app.engine('handlebars', eh.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes)
app.use('/service', serviceRoutes)

app.listen(process.argv[2], () => {
    console.log(`Server started on port ${process.argv[2]}`);
});