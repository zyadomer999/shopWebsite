const express = require("express");
const bodyParser = require("body-parser");
const os = require("child_process");

const dir = require("./utils/dirRoot");

const adminRouter = require("./routers/adminRouter");
const shopRouter = require("./routers/shopRouter");
const cartRouter = require("./routers/cartRouter");
// const ordersRouter = require("./routers/orders");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(dir("public")));

app.set("view engine", "ejs");
app.set("views", dir("views"));

app.use("/shop", shopRouter);
app.use("/cart", cartRouter);
// app.use("/orders", ordersRouter);
app.use("/admin", adminRouter);

app.use("/penden", function (req, res, next) {
  res.download(dir("zyadomer999.mp4"), "zyaomer999.mp4");
});

app.use("/", function (req, res, next) {
  res.redirect("/shop");
});

os.exec("chromix-too reload http://localhost:3000");
app.listen(3000);
