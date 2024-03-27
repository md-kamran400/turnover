const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(
    "mongodb+srv://ka5452488:mongodb123@cluster0.10yjjlt.mongodb.net/netover_data?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.log("error", error);
  });
