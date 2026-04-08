import { defineConfig } from '@prisma/config'
import * as dotenv from 'dotenv'

// Esto carga las variables de .env o .env.local manualmente
dotenv.config({ path: '.env.local' }) 

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
})