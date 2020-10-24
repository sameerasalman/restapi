import express from 'express'
import bodyParser, { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import userRouter from './src/user.router'
import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended:true }))
app.use(morgan(dev))

app.use(bodyParser.json());

//CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/user', userRouter)
export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {

    })
  }
  catch(error) {
    console.error(error);
  }
}

 
