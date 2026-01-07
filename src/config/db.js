
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client.ts"
import pg from "pg"

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)
export const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "query", "warn"] : ["error"]
})

export const connectDB = async () => {
    try {
        await prisma.$connect()
        console.log("DB connection established using prisma")

    } catch (error) {
        console.error("Error connecting DB : ", error)
        process.exit(1)
    }
}

export const disconnectDB = async () => {
    prisma.$disconnect()
}