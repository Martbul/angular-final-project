const router = require("express").Router();
const appService = require("../services/appService");
const userService = require("../services/userService");
var moment = require('moment');

router.post("/", async (req, res) => {
 let posted_at = moment().format("MMMM Do YYYY"); 
 
 console.log( req.user);
  // const { title, description, price, category, imgUrl, _id, email} =
  //   req.body;

  const { title, description, price, category, imgUrl, creator} =
  req.body
console.log(req.body);
  

  try {
    //! dobarvi nqkaksi tuk da vrushtah ordur id za da move posle da go vzema i posle da rendurna ordura v prole page

    // await appService.create({
    //   title,
    //   description,
    //   price,
    //   category,
    //   imgUrl,
    //   _id,
    //   _ownerEmail: email,
    // });

    await appService.create({
      title,
      description,
      price,
      category,
      imgUrl,
      posted_at,
      creator
    });

  //   await userService.addOrderToUser({
  //     order
  //   },
  //     email,
  // );


    res.status(201).end();
    console.log("new order saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
