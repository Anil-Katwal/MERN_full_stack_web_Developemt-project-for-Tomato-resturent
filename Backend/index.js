const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Combined route logic for "/"
app.get("/", function(req, res) {
    fs.readdir('./files', function(err, files) {
        if (err) {
            console.error(err);
            res.status(500).send("An error occurred while reading the directory.");
            return;
        }
        console.log(files);
        res.render("index", { files: files });
    });
});

app.listen(3000, function() {
    console.log("It's running on port 3000");
});
