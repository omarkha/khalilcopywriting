const express = require("express");
const router = express.Router();

const subscriberController = require("../controllers/subscriberController");

router.get("/", subscriberController.getSubscribers);

router.get("/:id", subscriberController.getSubscriber);

router.post("/", subscriberController.addSubscriber);

router.delete("/:id", subscriberController.deleteSubscriber);

router.patch("/:id", subscriberController.updateSubscriber);

module.exports = router;
