import { PrismaClient } from "@/generated/prisma/client";
// import { PrismaClient } from "../../generated/prisma/client"; // relative to monkey/lib/prisma.js

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
