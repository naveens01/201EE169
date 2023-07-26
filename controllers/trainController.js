const express = require('express');
const router = express.Router();
const axios = require('axios');


const newTrain = {
  companyName: 'Train Central',
  ownerName: 'Naveen',
  rollNo: '169',
  ownerEmail: 'naveens.ee20@bitsathy.ac.in',
  accessCode: 'VxeuTv'
}.then((response) => {
    console.log('Train registered successfully:', response.data);
}).catch((error) => {
    console.error('Error in registering the train:', error.message);
});


const authData = {
    companyName: 'Train Central',
    clientID: 'b46118f0-fbde-4b16-adb1-6ae6ad718b27',
    ownerName: 'Naveen',
    ownerEmail: 'naveens.ee20@bitsathy.ac.in',
    rollNo: '169',
    clientSecret: 'XOyol0RPaskWOdAN',
}.then((response) => {
    const authToken = response.data.token;
    console.log('Authorization Token:', authToken);
}).catch((error) => {
    console.error('Error obtaining Authorization Token, try again:', error.message);
});


const authTrain = {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  }.then((response) => {
    const trainDetails = response.data;
    console.log('Train Detail:', trainDetails);
  })
  .catch((error) => {
    console.error('Error to fetch train details:', error.message);
  });




const traindetails=asyncHandler(async(req,res)=>{
    try {
        const trains = await getTrainSchedules();
        res.json(trains);
      } catch (error) {
        console.error('error', error.message);
        res.status(500).json({ error: 'Server Error' });
      }   
})



export{
    newTrain,
    authData,
    authTrain,
    traindetails,
    trainRegstraion
}