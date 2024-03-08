const router = require("express").Router();
const appService = require("../services/appService");
//const { isAuth } = require("./../middlewares/authMiddleware");

router.get("", async (req, res) => {
 // console.log(req);

  try {
    //  const orders = await orderService.getAll(search, from, to);
    const apps = await appService.getAll();
  //  console.log(apps);
    res.json(apps);
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.get("/:appId", async (req, res) => {
  const appId = req.params.appId;
 // console.log(appId);

  const app = await appService.getSingleBind(appId).lean();

  if (!app) {
    return;
  }
  res.json(app);

  //res.render("details");
});

router.put(":appId", async (req, res) => {
  try {
    const { appId } = req.params;
    //console.log(appId);

    const { fullname, address, dayForDelivery, timeForDelivery, order, email } =
      req.body;

    const appData = {
      fullname,
      address,
      dayForDelivery,
      timeForDelivery,
      order,
      // _ownerId: req.user._id,
    };
   // console.log(appData);

    await appService.update(appId, appData);

    res.json(appData).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.delete(":appId", async (req, res) => {
  try {
    const { appId } = req.params;
    // console.log(appId);
    await appService.delete(appId);
    res.json(appId).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});



router.post("/like", async (req, res) => {
  const {email}  = req.body
  const { appId } = req.body;

  const result = await appService.addLikeToBind(appId, email);

  res.json(result).status(200).end()
});


// router.post('/binds/:bindId', async (req, res) => {
//   console.log('here');
//   console.log(req.body);
// })


module.exports = router;
