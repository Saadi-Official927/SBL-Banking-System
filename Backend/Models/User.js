const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    debitcard : {
        type : Number,
        required :  true
    },
    password : {
        type : String,
        required :  true
    },
    email : {
        type: String,
        required : true,
        unique: true
    },
    date : {
        type : Date,
        default: Date.now
    }
});
const User = mongoose.model('user', UserSchema);
module.exports = User


//     For every type of schema
// const blogSchema = new Schema({
//     title: String, // String is shorthand for {type: String}
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs: Number
//     }
//   });