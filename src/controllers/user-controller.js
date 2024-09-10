'use strict';

const User = require('../models/user');
const { Op } = require('sequelize');
const { encryptPassword, authenticate } = require('../services/authService');

exports.login = async (req, res, next) => {
    try {
        const token = await authenticate(req.body.email, req.body.password);
    
        res.status(200).send({
            token
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.post = async (req, res, next) => {
    try {
        const encPass = await encryptPassword(req.body.password);
        const newUser = await User.create({
            name: req.body.name,
            document: req.body.document,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            address: req.body.address,
            password: encPass
        });

        const token = await authenticate(req.body.email, req.body.password);
    
        res.status(200).send({
            user: {
                id: newUser.id,
                name: newUser.name,
                document: newUser.document,
                email: newUser.email,
                phone: newUser.phone,
                birthDate: newUser.birthDate,
                address: newUser.address
            },
            token
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.get = async (req, res, next) => {
    try {
        const filters = buildUserQueryFilters(req.query);

        const users = await User.findAll({
            where: filters,
            attributes: ['id', 'name', 'document', 'email', 'phone', 'birthDate', 'address', 'createdAt', 'updatedAt']
        });

        if (users === null) {
            return res.status(404).send({
                error: "Users not found with these query parameters."
            });
        }
        
        return res.status(200).send({
            users
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
    
        const user = await User.findByPk(id, 
            {
              attributes: {
                 exclude: ['password']
              }
            });
        if (user === null) {
            return res.status(404).send({
                error: "User not found with this id."
            });
        }
        
        return res.status(200).send({
            user
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const userData = req.body;

    try {
        const user = await User.findByPk(id);
        if (user === null) {
            return res.status(404).send({
                error: "User not found with this id."
            });
        }

        user.name = userData.name;
        user.email = userData.email;
        user.document = userData.document;
        user.phone = userData.phone;
        user.birthDate = userData.birthDate;
        user.address = userData.address;

        await user.save();

        return res.status(200).send({
            user
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.delete = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await User.findByPk(id);
        if (user === null) {
            return res.status(404).send({
                error: "User not found with this id."
            });
        }

        await user.destroy();

        return res.status(200).send();
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

const buildUserQueryFilters = ({ name, email, birthDate }) => {
    const filters = {};
  
    if (name) {
      filters.name = {
        [Op.iLike]: `%${name}%`
      };
    }
  
    if (email) {
      filters.email = {
        [Op.iLike]: `%${email}%`
      };
    }
  
    if (birthDate) {
      filters.birthDate = birthDate;
    }
  
    return filters;
  };