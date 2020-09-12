const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const twilio = require('twilio');
let app = new express();

// Create a TwiML document to provide instructions for an outbound call
app.post('/hello', function(req, res, next) {
    // Create a TwiML generator
    var twiml = new twilio.twiml.VoiceResponse();
    // var twiml = new twilio.TwimlResponse();
    twiml.say('Hello there! You have successfully configured a web hook.');
    twiml.say('Good luck on your Twilio quest!', { 
        voice:'woman' 
    });
  
    // Return an XML response to this request
    res.set('Content-Type','text/xml');
    res.send(twiml.toString());
  });


app.listen(5000);