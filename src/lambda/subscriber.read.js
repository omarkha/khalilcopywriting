// productRead.js
import mongoose from "mongoose";
// Load the server
import db from "./server";
// Load the Product Model
import Subscriber from "./subscriber.model";
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Use Product.Model to find all products
    const subs = await Subscriber.find(),
      response = {
        msg: "Subscribers successfully found",
        data: subs,
      };

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
