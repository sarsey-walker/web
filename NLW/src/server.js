// impot dependences
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando express
const server = express()
    server
        // utilizando arquivos estaticos
        .use(express.static('public'))

        // config template engine
        .set('views', path.join(__dirname, "views"))
        .set('view engine', 'hbs')

        // crieate rote
        .get('/', pages.index)
        .get('/orphanage', pages.orphanage)
        .get('/orphanages', pages.orphanages)
        .get('/create-orphanage', pages.createOrphanage)

// on server
server.listen(5500)