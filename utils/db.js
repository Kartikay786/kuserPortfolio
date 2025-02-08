import mongoose from "mongoose";

const dbConnection = () => {
    const Uri = process.env.URI;

    mongoose.connect(Uri)
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.log('error at db connection',err);
    })
   

}

export default dbConnection