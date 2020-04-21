var connection = new require('./kafka/Connection');
var { mongoDB } = require('./config');
var mongoose = require("mongoose");
const account = require("./services/account");

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};
mongoose.connect(mongoDB, options, (err) => {
    if (err) {
        console.log("MONGODB connection error", err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});

function handleTopicRequest(topic_name) {
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    // console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name);
        // console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);

        switch (topic_name) {
            case "account":
                account.serve(data.data, function (err, res) {
                    response(data, res, producer);
                    return;
                })
        }
    });
}

function response(data, res, producer) {
    console.log('after handle', res);
    var payloads = [
        {
            topic: data.replyTo,
            messages: JSON.stringify({
                correlationId: data.correlationId,
                data: res
            }),
            partition: 0
        }
    ];
    producer.send(payloads, function (err, data) {
        console.log('producer send', data);
    });
    return;
}

// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("account");
