const Subscriber = require("../models/subscriber.model");

const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.status(200).json(subs);
  } catch (err) {
    res.send(err);
  }
};

const getSubscriber = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : req.body.id;
    const sub = await Subscriber.findById(id);
    res.status(200).json(sub);
  } catch (err) {
    res.send(err);
  }
};

const addSubscriber = async (req, res) => {
  try {
    await Subscriber.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    });
    res.send(`Subscriber added. ${JSON.stringify(req.body)}`);
  } catch (err) {
    res.send(err);
  }
};

const deleteSubscriber = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id : req.body.id;
    await Subscriber.findByIdAndDelete(id);
    await res.status(200).json({ msg: "delete sub." });
  } catch (err) {
    res.send(err);
  }
};

const updateSubscriber = async (req, res) => {
  res.status(200).json({ msg: "update sub" });
};

module.exports = {
  getSubscriber,
  getSubscribers,
  addSubscriber,
  deleteSubscriber,
  updateSubscriber,
};
