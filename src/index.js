import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
  app.listen(process.env.port || 8000, ()=>{
    console.log(`Server is running at http://localhost:${process.env.port}`);
  })
})
.catch((err)=>{
  console.log("Mongo DB Connection Failed !!! ",err);
});












/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error:", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
*/
