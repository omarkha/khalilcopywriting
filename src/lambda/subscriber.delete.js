// productDelete.js
import mongoose from "mongoose";
// Load the server
import db from "./server";
// Load the Product Model
import Subscriber from "./subscriber.model";
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Parse the ID
    const id = JSON.parse(event.body),
      response = {
        msg: "Subscriber successfully deleted",
      };

    // Use Product.Model to delete
    await Subscriber.findOneAndDelete({ _id: id });

    return {
      statusCode: 201,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log("product.delete", err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
