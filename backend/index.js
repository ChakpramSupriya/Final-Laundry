// import express from "express";
// // const express=require('express')
// import router from "./routes/user.routes.js";
// import mongodb from "./config/db.js";
// import cors from "cors";
// const server = express();
// import Razorpay from "razorpay";

// server.use(express.json());
// server.use(cors());
// server.use("/user", router); //localhost:3000/user
// server.get("/", (req, res) => {
//   res.json({
//     success: "true",
//   });
// });

// server.post("/order", async (req, res) => {
//   try {
//     const razorpay = new Razorpay({
//       key_id: "rzp_test_JIH6EhvgsXj43w",
//       key_secret: "l4JlduSRLcbaB5YrcLkwm2x5",
//     });

//     const options = req.body;
//     const order = await razorpay.orders.create(options);

//     if (!order) {
//       return res.status(500).send("Error is not a valid order");
//     }

//     res.json(order);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error");
//   }
// });
// mongodb();

// server.listen(3000, () => {
//   console.log("run at server : 3000");
// });

import express from "express";
import Razorpay from "razorpay";
import mongodb from "./config/db.js";
import cors from "cors";
import crypto from "node:crypto";
import registerRoutes from "./routes/user.routes.js";
import drycleanRoutes from "./routes/dryclean.routes.js";
import assistanceRoutes from "./routes/assistance.route.js";
import bookdrycleanRoutes from "./routes/bookdryclean.routes.js";
import bookassistanceRoutes from "./routes/bookassistance.route.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: "rzp_test_JIH6EhvgsXj43w",
      key_secret: "l4JlduSRLcbaB5YrcLkwm2x5",
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error is not a valid order");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", "l4JlduSRLcbaB5YrcLkwm2x5");
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

app.use("/register", registerRoutes);
app.use("/dryclean", drycleanRoutes);
app.use("/assistance", assistanceRoutes);
app.use("/bookdryclean", bookdrycleanRoutes);
app.use("/bookassistance", bookassistanceRoutes);
mongodb();

app.listen(3000, () => {
  console.log("Listening on port", 3000);
});
