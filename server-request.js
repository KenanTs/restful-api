const https = require('https');

https
    .get("", resp => {
        let data = "";

        resp.on("data" , chunk => {
            data += chunk;
        });

        resp.on("end", () => {
            let url = JSON.parse(data);
            console.log(url);
        });
    })
    .on("error", err => {
        console.log("Error: " + err.message);
    });