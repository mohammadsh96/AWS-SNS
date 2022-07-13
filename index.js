'use strict';
const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.ACCESS,
    secretAccessKey: process.env.SECRET
});

function sendMessage() {
    const messageParams = {
        Message: 'use this code to save 70% of your next order : 70free',
        // TopicArn: process.env.TOPIC,
        TopicArn: 'arn:aws:sns:us-east-1:942186265041:GIT-TOP'
    }
    const publishMsg = new AWS.SNS({
        apiVersion: '2010-03-31'

    }).publish(messageParams).promise();

    publishMsg.then((data) => {
        console.log('published: ', data.MessageId);
    })
}


sendMessage();