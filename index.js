dotenv.config();
import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import dbConnection from './utils/db.js';
const app = express();
import cors from 'cors'
import contactRoute from './contact.router.js'

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/contact',contactRoute);
// dbconnection
dbConnection();

// listen port
const Port =  process.env.PORT || 4000;
app.listen(Port,()=>{
    console.log(`Server running on Port ${Port}`)
})
