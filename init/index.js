const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listings");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "668f7130066602715730cbd1",
  }));
  await listing.insertMany(initdata.data);
  console.log("data was saved");
};
initDB();
