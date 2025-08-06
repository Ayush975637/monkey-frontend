// monkey/lib/prisma.js
const { PrismaClient } = require("./generated/prisma/client");

const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

module.exports = { db }; // export properly for CommonJS
