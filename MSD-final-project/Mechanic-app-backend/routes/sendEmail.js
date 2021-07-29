const express = require("express");
const router = express.Router();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

/* GET users listing. */
router.get("/", function (req, res) {
  const {recipient, sender, topic, text} = req.query;
console.log(req.query);
  const msg = {
      to: recipient,
      from: sender,
      subject: topic,
      text: text
  }

//   sgMail
//   .send(msg)
//   .then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
});

module.exports = router;