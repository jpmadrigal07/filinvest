import express from "express";
import payload from "payload";
import path from "path";
import nodemailerSendgrid from "nodemailer-sendgrid";

require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? "../../../.env" : "../../.env",
});
const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "../assets")));

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

const start = async () => {
  await payload.init({
    secret: process.env.CMS_SECRET,
    mongoURL: process.env.MONGODB_URL,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
    ...(sendGridAPIKey
      ? {
          email: {
            transportOptions: nodemailerSendgrid({
              apiKey: sendGridAPIKey,
            }),
            fromName: "Admin",
            fromAddress: "jepoyyy0225@gmail.com",
          },
        }
      : {}),
  });

  app.listen(9000);
};

start();
