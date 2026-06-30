import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Mongo DB Connected Successfully");
    console.log("DB Host :", conn.connection.host);
    console.log("DB Name :", conn.connection.name);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // exi t 1 ka mtlb error aate hee code ruk jayega
  }
};

export default connectionDB;
