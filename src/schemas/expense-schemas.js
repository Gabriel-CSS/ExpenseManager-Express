/**
 * @swagger
 * components:
 *   schemas:
 *     Expense:
 *       type: object
 *       required:
 *         - amount
 *         - description
 *         - date
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the expense
 *         amount:
 *           type: number
 *           description: The amount of the expense
 *         description:
 *           type: string
 *           description: The description of the expense
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date of the expense
 *         userId:
 *           type: integer
 *           description: The user ID of the expense
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The created date of the expense
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The updated date of the expense
 *     ExpenseCreateInput:
 *       type: object
 *       required:
 *         - amount
 *         - description
 *         - date
 *       properties:
 *         amount:
 *           type: number
 *           description: The amount of the expense
 *         description:
 *           type: string
 *           description: The description of the expense
 *         date:
 *           type: string
 *           description: The date of the expense
 *     ExpenseUpdateInput:
 *       type: object
 *       required:
 *         - amount
 *         - description
 *         - date
 *       properties:
 *         amount:
 *           type: number
 *           description: The amount of the expense
 *         description:
 *           type: string
 *           description: The description of the expense
 *         date:
 *           type: string
 *           description: The date of the expense
 */

module.exports = {};