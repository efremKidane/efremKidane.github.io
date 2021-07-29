const express = require("express");
const router = express.Router();

/* GET users listing. */
router.post("/", function (req, res) {
    
    // if(req.body.date < new Date()){
    //     res.json({status: 'error'})
    // }
  req.db.collection('appointmentInfo').find({date: req.body.date, time: req.body.time}).count().then(data=>{
      console.log(data);
  })
  req.db
    .collection("appointmentInfo")
    .insertOne(req.body)
    .then((data) => {
      res.json({ status: "success" });
    });
});

module.exports = router;
