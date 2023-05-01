const express = require('express');
const routes = express.Router();
const products = require('../services/products');

const storage = require('../services/multer');
const multer = require('multer');
const uploader = multer({ storage });

routes.get('/', async (req, res) => {
    try {
        res.json(await products.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting products `, err.message);
        next(err);
    }
})

routes.get('/:id', async function(req, res, next) {
    try {
    res.json(await products.getOne(req.params.id));
    } catch (err) {
    console.error(`Error while getting product`, err.message);
    next(err);
    }
});

routes.post('/', uploader.single('image'), async function(req, res, next) {
    try {
    res.json(await products.create(req.body));
    } catch (err) {
    console.error(`Error while creating product`, err.message);
    next(err);
    }
});

routes.delete('/:id', async function(req, res, next) {
    try {
    res.json(await products.remove(req.params.id));
    } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
    }
});

routes.put('/:id', async function(req, res, next) {
    try {
    res.json(await products.update(req.params.id, req.body));
    } catch (err) {
    console.error(`Error while updating products`, err.message);
    next(err);
    }
});

module.exports = routes;