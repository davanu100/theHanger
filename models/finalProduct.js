const mongoose = require("mongoose") ;

const Schema = mongoose.Schema;

const finalProductSchema = new Schema({
    sellerId : {
        type: Schema.Types.ObjectId,
        ref : "Seller" ,
        required : true 
    },
    title : {
        type : String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    currentPrice : {
        type : Number ,
        required : true 
    },
    discount : {
        type : Number,
        default : 0
    },
    image:[{
        url : {
            type : String,
            required : true
        }
    }],
    brand : {
        type : String,
        required : true
    },
    desc : { 
        type : String,
        required : true
    },
    status : {
        type : String ,
        default : "Completed"
    },
    cat1 : {
        type : String,
        required : true
    },
    cat2 : {
        type : String,
        required : true
    },
    cat3 : {
        type : String,
        required : true
    },
    size:[{
            particularSize : {
                type : String ,
                required : true,
            },
            quantity : {
                type : Number ,
                default : 0
            }
    }],
    totalQuantity : {
        type : Number ,
        required : true
    },
    passedBy:{
        type : Schema.Types.ObjectId,
        ref : "Corporate"
    }
});

finalProductSchema.index({cat1:'text',cat2:'text',cat3:'text',brand:'text',title:'text'},{name:'My text Index' , weights : {brand : 10,cat3 : 4,cat2:2,cat1:1}});

module.exports = mongoose.model("FinalProduct",finalProductSchema) ;