const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const con = await mongoose.connect(
      `mongodb+srv://hari:hari1234@jobportal.ncztu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log("DB Connection Successful.");
  } catch (err) {
    console.log("Mongodb connection failed");
    console.log(err);
  }
};
dbConnect();

module.exports = mongoose;
