var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017', { userNewUrlParser: true }, function(err, response) {
    if (!!err) {
        console.log('Currently we are not able to connect it: ' + err );
    } else {
        console.log('Connection extablised successfully..!! ' + db + ' with response of ' + response);
    }
});