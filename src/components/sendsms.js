const accountSid = "ACe95674eb73d5140cd979e5c1d11fdaac";
const authToken = "20602dc7206e05f6d406d1ceb24133cd";
const client = require('twilio')(accountSid, authToken);

import twilio from 'twilio'

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: 'GBV Alert',
        to: '+263773403139'
    })
    .then(message => console.log(message.sid));

// Import the functions you need from the SDKs you need
import client from 'twilio';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics"

