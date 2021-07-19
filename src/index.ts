import express, {Application} from "express";
import {addOne} from "./add-one";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", function (req, res) {
  const num = parseInt(req.query.num as string, 10);
  res.json({result: addOne(num)});
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
