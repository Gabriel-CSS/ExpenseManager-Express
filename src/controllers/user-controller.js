'use strict';

exports.post = (req, res, next) => {
    res.status(200).send(req.body);
};

exports.get = (req, res, next) => {
    res.status(200).send({
        query: req.query
    });
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send(id);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id,
        body: req.body
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send(id);
};