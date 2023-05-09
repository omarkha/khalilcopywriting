// productUpdate.js
import mongoose from "mongoose";
// Load the server
import db from "./server";
// Load the Product Model
import Subscriber from "./subscriber.model";
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Parse the ID
    const data = JSON.parse(JSON.parse(event.body)),
      id = data.id,
      subscriber = data.subscriber,
      response = {
        msg: "Product successfully updated",
        data: subscriber,
      };

    // Use Product.Model and id to update
    await Subscriber.findOneAndUpdate({ _id: id }, subscriber);

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log("product.update", err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
