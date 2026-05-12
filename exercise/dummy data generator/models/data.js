import mongoose from "mongoose"

const dataschema = new mongoose.Schema({
    name:String,
    language : String,
    salary:String,
    isManager : String
})

export const Data= mongoose.model('Data',dataschema);