
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import slotsRouter from "./routes/slots.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use("/slots", slotsRouter);

const CONNECTION_URL = 'mongodb+srv://ayush:ayush@cluster0.edsj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`, `\nconnected to database`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);