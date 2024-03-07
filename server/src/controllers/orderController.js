const router = require("express").Router();
const orderService = require("../services/appService");
const userService = require("../services/userService");


router.post("/order", async (req, res) => {
  const { title, description, price, category, imgUrl, email,app_id, username } =
    req.body;
  // console.log(email);

  try {
    //console.log(req.body);

    // console.log(req.body);
    //! dobarvi nqkaksi tuk da vrushtah ordur id za da move posle da go vzema i posle da rendurna ordura v prole page

    await orderService.create({
      title,
      description,
      price,
      category,
      imgUrl,
      app_id,
      _ownerEmail: email,
    });


    await userService.addOrderToUser({
      order
    },
      email,
  );


    res.status(201).end();
    console.log("new order saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
