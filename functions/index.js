const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token
const client = new twilio(accountSid, authToken);
const twilioNumber = '+15414499013' // your twilio phone number
/// start cloud function
exports.commentMessage = functions.database
       .ref('/messages/{messageKey}')
       .onUpdate(event => {
    const messageKey = event.params.messageKey
    return admin.database()
                .ref(`/messages/${messageKey}`)
                .once('value')
                .then(snapshot => snapshot.val())
                .then(order => {
                    const name  = order.name
                    const comment = order.comment
                    const phoneNumber = '+15416677319'
                    const textMessage = {
                        body: `from: ${name}\n${comment}`,
                        to: phoneNumber,  // Text to this number
                        from: twilioNumber // From a valid Twilio number
                    }
                    return client.messages.create(textMessage)
                })
                .then(message => console.log(message.sid, 'success'))
                .catch(err => console.log(err))
});
