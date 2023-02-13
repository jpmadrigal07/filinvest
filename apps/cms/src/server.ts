import express from "express";
import payload from "payload";
import path from "path";

require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? "../../../.env" : "../../.env",
});
const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "../assets")));

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  await payload.initAsync({
    secret: process.env.CMS_SECRET,
    mongoURL: process.env.MONGODB_URL,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(9000);
};

start();
