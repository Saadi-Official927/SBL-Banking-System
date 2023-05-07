const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    debitcard : {
        type : Number
    },
    cash: {
        type : Number,
        required :  true
    },
    Date : {
        type : Date,
        default: Date.now
    }
});

const Bank = mongoose.model('bank', NoteSchema);
module.exports = Bank