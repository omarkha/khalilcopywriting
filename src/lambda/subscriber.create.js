// productCreate.js
import mongoose from "mongoose";
// Load the server
import db from "./server";
// Load the Product Model
import Subscriber from "./subscriber.model";
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const data = JSON.parse(event.body),
      full_name = data.fullname,
      first_name = data.firstname,
      last_name = data.lastname,
      email = data.email,
      id = mongoose.Types.ObjectId(),
      sub = {
        _id: id,
        full_name: full_name,
        first_name: first_name,
        last_name: last_name,
        email: email,
        __v: 0,
      },
      response = {
        msg: "Subscriber successfully created",
        data: sub,
      };

    // Use Product.Model to create a new product
    await Subscriber.create(sub);
    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log("subscriber.create", err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
