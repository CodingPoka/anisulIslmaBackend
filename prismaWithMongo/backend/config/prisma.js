
/**
 * ==========================================
 * Prisma Configuration
 * ==========================================
 *
 * Purpose:
 * This file creates and exports a single PrismaClient instance
 * that will be reused throughout the entire application.
 *
 * Why do we need PrismaClient?
 * - PrismaClient is the main interface between our Node.js
 *   application and the MongoDB database.
 * - It allows us to perform database operations such as:
 *      - Create data
 *      - Read data
 *      - Update data
 *      - Delete data
 *
 * Why create only ONE PrismaClient instance?
 * - Creating multiple PrismaClient instances wastes resources.
 * - A single shared instance is more efficient.
 * - This is the recommended approach in production applications.
 *
 * How will we use it?
 * Instead of writing:
 *
 *     const prisma = new PrismaClient();
 *
 * in every controller, we will simply import this file:
 *
 *     const prisma = require("../config/prisma");
 *
 * Then use:
 *
 *     await prisma.user.findMany();
 *     await prisma.user.create({...});
 *     await prisma.user.update({...});
 *     await prisma.user.delete({...});
 */

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;