import express from "express";
import { getClosingPrices, getSpotPrices } from "./utils/cem.js";
import { combinaCSV } from "./utils/varios.js";


const app = new express();
app.use(express.json());

app.get("/closingPricesAndSpot/", async function (req, res)  {
  
  const params = req.query || {from: '2023-10-01', to: '2023-10-06'}
  const [csvClosingPrices, csvSpots] = await Promise.all([getClosingPrices(params), getSpotPrices(params)])
  const csv = combinaCSV(csvClosingPrices, csvSpots);
  res.attachment(`sc_${params.from}_${params.to}.csv`).send(csv)
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
