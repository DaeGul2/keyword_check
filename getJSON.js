const fs = require("fs");

fs.readFile("public/origin.txt", "utf8", (err, origin) => {
    if (err) {
        console.error(err);
        return;
    }
    const arr = origin.split("\n");
    fs.writeFileSync("public/keyword.json", JSON.stringify(arr));
});