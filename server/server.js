import cors from 'cors';
import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import eventsRoutes from './routes/eventsRoutes.js'
import locationsRoutes from './routes/locationsRoutes.js'


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors());

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

app.use('/api', eventsRoutes);
app.use('/api', locationsRoutes);


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})