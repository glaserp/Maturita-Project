import mongo from 'mongodb';

var Server = mongo.Server,
      Db = mongo.Db

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('ticket', server);

db.open(function(err, db) {
    if(!err) {
        db.collection('highlight', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'highlight' collection doesn't exist. Creating it with sample data...");
            }
        });
    }
});

export function findById (req, res) {
    var id = req.params.id;
    console.log('Retrieving highlight: ' + id);
    db.collection('highlight', function(err, collection) {
        collection.findOne({'id': id}, function(err, item) {
            res.send(item);
        });
    });
};

export function findAll (req, res) {
    db.collection('highlight', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

export let addHighlight = function(req, res) {
    var highlight = req.body;
    console.log('Adding highlight: ' + JSON.stringify(highlight));
    db.collection('highlight', function(err, collection) {
        collection.insert(highlight, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

export let updateHighlight = function(req, res) {
    var id = req.params.id;
    var highlight = req.body;
    console.log('Updating highlight: ' + id);
    console.log(JSON.stringify(highlight));
    db.collection('highlight', function(err, collection) {
        collection.update({'id': id}, highlight, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating highlight: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(highlight);
            }
        });
    });
}

export let deleteHighlight = function(req, res) {
    var id = req.params.id;
    console.log('Deleting highlight: ' + id);
    db.collection('highlight', function(err, collection) {
        collection.remove({'id': id}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
