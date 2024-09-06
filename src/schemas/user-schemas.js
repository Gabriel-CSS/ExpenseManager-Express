/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         document:
 *           type: string
 *           description: The document of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         phone:
 *           type: string
 *           description: The phone of the user
 *         birthDate:
 *           type: string
 *           format: date-time
 *           description: The birthDate of the user
 *         address:
 *           type: string
 *           description: The address of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The created date of the user
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The updated date of the user
 *     UserCreateResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: '#/components/schemas/User'
 *         token:
 *           type: string
 *           description: JWT access token
 *     UserCreateInput:
 *       type: object
 *       required:
 *         - name
 *         - document
 *         - email
 *         - password
 *         - phone
 *         - birthDate
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         document:
 *           type: string
 *           description: The document of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         phone:
 *           type: string
 *           description: The phone of the user
 *         birthDate:
 *           type: string
 *           format: date-time
 *           description: The birthDate of the user
 *         address:
 *           type: string
 *           description: The address of the user
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 *     UserUpdateInput:
 *       type: object
 *       required:
 *         - name
 *         - document
 *         - email
 *         - phone
 *         - birthDate
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         document:
 *           type: string
 *           description: The document of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         phone:
 *           type: string
 *           description: The phone of the user
 *         birthDate:
 *           type: string
 *           format: date-time
 *           description: The birthDate of the user
 *         address:
 *           type: string
 *           description: The address of the user
 *     LoginInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user
 */

module.exports = {};