const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var reviewSchema = new Schema({
    ProductID: {type:String, required:true},
    CustomerId: {type: String, required: true},
    CustomerName: {type: String, required: true},
    Vote: {type: Number, required: true},
    Review: {type: String, required: true}
});

reviewSchema.plugin(mongoosePaginate);
const reviewModel = mongoose.model('review', reviewSchema);
module.exports = reviewModel;