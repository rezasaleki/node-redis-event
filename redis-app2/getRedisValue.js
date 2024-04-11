const redis = require("redis");
const client = redis.createClient({url: "redis://localhost:"});

client.on("error", function (error) {
    console.error("error: ", error);
});

client.get("message", function (error, reply) {
    if (error) {
        console.error(error);
    } else {
        console.log("Value from Redis:", reply);
    }
});