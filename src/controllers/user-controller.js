'use strict';

const sequelizeDatabase = require('../database/sequelize-database');
const User = require('../models/user');
const { Op } = require('sequelize');
const { encryptPassword, authenticate } = require('../services/authService');

exports.login = async (req, res, next) => {
    try {
        await sequelizeDatabase.sync();
    
        const token = await authenticate(req.body.email, req.body.password);
    
        res.status(200).send({
            token
        });
    } catch (error) {
        return res.status(500).send({
            error
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await sequelizeDatabase.sync();
    
        const encPass = await encryptPassword(req.body.password);
        const newUser = await User.create({
            name: req.body.name,
            document: req.body.document,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
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
                birthDate: newUser.birthDate
            },
            token
        });
    } catch (error) {
        return res.status(500).send({
            error
        });
    }
};

exports.get = async (req, res, next) => {
    try {
        await sequelizeDatabase.sync();

        const filters = buildUserQueryFilters(req.query);

        const users = await User.findAll({
            where: filters,
            attributes: ['id', 'name', 'document', 'email', 'phone', 'birthDate', 'createdAt', 'updatedAt']
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
        return res.status(500).send({
            error
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        await sequelizeDatabase.sync();

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
        return res.status(500).send({
            error: error
        });
    }
};

exports.put = async (req, res, next) => {
    const id = req.params.id;
    const userData = req.body;

    try {
        await sequelizeDatabase.sync();

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

        await user.save();

        return res.status(200).send({
            user
        });
    } catch (error) {
        return res.status(500).send({
            error
        });
    }
};

exports.delete = async (req, res, next) => {
    const id = req.params.id;

    try {
        await sequelizeDatabase.sync();

        const user = await User.findByPk(id);
        if (user === null) {
            return res.status(404).send({
                error: "User not found with this id."
            });
        }

        await user.destroy();

        return res.status(200).send();
    } catch (error) {
        return res.status(500).send({
            error
        });
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