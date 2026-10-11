import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import currencyRoutes from './routes/currencyRoutes'

dotenv.config()

export const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json())

app.use('/api/convert', currencyRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});