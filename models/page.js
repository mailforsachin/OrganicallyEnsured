var mongoose= require('mongoose');

var PageSchema = mongoose.Schema({
    title:{
        type: string,
        required: true
    },
    slug:{
        type: string,
        
    },
    content:{
        type: string,
        required: true
    },
    sorting:{
        type: Number
    }
});

var Page = module.exports = mongoose.model('Page', PageSchema);