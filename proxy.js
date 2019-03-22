const express = require("express");
const proxy = require("http-proxy-middleware");
const app = express();

app.use(
  "*",
  proxy({ target: "https://www.faire.com", secure: false, changeOrigin: true })
);

app.listen(4242, err => {
  if (err) {
    console.error(err);
    return;
  }

  // tslint:disable-next-line:no-console
  console.log(`Listening at http://localhost:4242/api`);
});
