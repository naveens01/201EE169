const express = require('express');
const app = express();
const router = express.Router()
const axios = require('axios');
import { newTrain,authData, authTrain } from '../controllers/trainController.js'

const API_URL = 'http://20.244.56.144/train/register';
const AUTH_URL='http://20.244.56.144/train/auth';
const AUTH_TOKEN=access_token;
const TRAIN_URL='http://20.244.56.144/train/trains';


router.post(API_URL,newTrain)
router.post(AUTH_URL,authData)
router.get(TRAIN_URL,authTrain)


export default {router,AUTH_TOKEN}

