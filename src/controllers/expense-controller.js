'use strict';

const Expense = require('../models/expense');
const { Op } = require('sequelize');

exports.post = async (req, res) => {
    try {
        const expense = await Expense.create({
            amount: req.body.amount,
            description: req.body.description,
            date: req.body.date,
            userId: req.id
        });

        res.status(200).send({expense});
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.get = async (req, res) => {
    try {
        const filters = buildExpenseQueryFilters(req.query, req.id);

        const expenses = await Expense.findAll({
            where: filters
        });

        if (expenses === null) {
            return res.status(404).send({
                error: "Expenses not found with these query parameters."
            });
        }
        
        return res.status(200).send({
            expenses
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.id;
    
        const expense = await Expense.findOne({ where: { id: id, userId: userId } });

        if (expense === null) {
            return res.status(404).send({
                error: "Expense not found with this id."
            });
        }
        
        return res.status(200).send({
            expense
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.put = async (req, res) => {
    try {
        const expenseData = req.body;
        const id = req.params.id;
        const userId = req.id;
    
        const expense = await Expense.findOne({ where: { id: id, userId: userId } });
        
        if (expense === null) {
            return res.status(404).send({
                error: "Expense not found with this id."
            });
        }
        
        expense.amount = expenseData.amount;
        expense.description = expenseData.description;
        expense.date = expenseData.date;

        await expense.save();

        return res.status(200).send({
            expense
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id;
        const userId = req.id;
    
        const expense = await Expense.findOne({ where: { id: id, userId: userId } });

        if (expense === null) {
            return res.status(404).send({
                error: "Expense not found with this id."
            });
        }

        await expense.destroy();

        return res.status(200).send({
            message: "Expense deleted successfully."
        });
    } catch (error) {
        const errorMessage = error.message || "An unexpected error occurred during this action.";
        return res.status(500).send({ error: errorMessage });
    }
};

const buildExpenseQueryFilters = ({ description, date }, userId) => {
    const filters = {};
  
    if (description) {
      filters.description = {
        [Op.iLike]: `%${description}%`
      };
    }
  
    if (date) {
      filters.date = date;
    }

    filters.userId = userId;
  
    return filters;
};