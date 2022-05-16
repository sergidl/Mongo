import express from 'express';
import moviesRouter from './routers/moviesRouter.js';
import userRouter from './routers/userRouter.js';
import clientErrorHandler from './middleware/errorHandler.js';
import errorRouter from './routers/errorRouter.js';
import path from 'path';
import {fileURLToPath} from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const app=express();

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log('---->app.js');
    next();
});

// app.get('/', function(req, res) {
//     const __dirname = path.dirname(__filename);
//     console.log(__dirname);
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.use('/movies',moviesRouter);
app.use('/users',userRouter);
//Otros direccionaminetos ...


app.use('*',errorRouter);
app.use(clientErrorHandler);


export default app;