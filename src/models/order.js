"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
    },
    size: {
      trim: true,
      type: String,
      required: true,
      enum: ["small", "medium", "large", "xlarge"],
    },
    quantity: { type: Number, default: 1 },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      default: function () {
        return this.quantity * this.price;
      },
      transform: function () {
        return this.quantity * this.price;
    },
  },
  { collection: "orders", timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
