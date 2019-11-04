const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) {console.log('MongoDB connection succeeded.');}
    else { console.log('Error in MongoDB connection: ' + JSON.string(err, undefined, 2));}

});

require('./student.model');