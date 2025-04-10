import mongoose from "mongoose";
export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://abhiraminair301204:AYT60ULnlX0f3QaA@cluster0.kp8sih4.mongodb.net/veridax-impact').then(()=>console.log("DB Connected"))

}

