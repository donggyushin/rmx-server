import Nexmo from 'nexmo'
import 'dotenv/config'


export const sendMessage = (to, text) => {
    const nexmo = new Nexmo({
        apiKey: process.env.NEXMO_API_KEY,
        apiSecret: process.env.NEXMO_API_SECRET,
    })
    const from = 'Nexmo';
    nexmo.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err)
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully. ")
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`)
            }
        }
    });
}

