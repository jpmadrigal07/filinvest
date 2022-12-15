import express from "express";
import payload from "payload";
import path from "path";

require("dotenv").config();
const app = express();
app.use("/assets", express.static(path.resolve(__dirname, "../assets")));

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  await payload.initAsync({
    secret: "7b0e33f25fe7b1d9f36f66bd",
    mongoURL:
      "mongodb+srv://patrick22:patrick22@cluster0.nex1c.mongodb.net/filinvest-cms?retryWrites=true&w=majority",
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.listen(9000);
};

start();
