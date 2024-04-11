const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
    console.error('error: ', error)
});

client.set("message", "Hello, Redis !", function (error, reply) {
    if (error) console.error("error: ", error);
    else console.log("reply: ", reply);
});