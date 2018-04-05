var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();
var axios = require("axios");

app.use(express.static(__dirname + "/../client/dist"));

app.get("/data", (req, res) => {
  axios
    .get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(function(response) {
      let historicalBitcoinPriceIndex = response.data.bpi;
      let hbpiArray = Object.entries(historicalBitcoinPriceIndex);

      let convertDateToValue = date => {
        return Number(date.split("-").join(""));
      };

      hbpiArray = hbpiArray.sort((a, b) => {
        let dateValueA = convertDateToValue(a[0]);
        let dateValueB = convertDateToValue(b[0]);

        return dateValueA - dateValueB;
      });

      res.send(hbpiArray);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
