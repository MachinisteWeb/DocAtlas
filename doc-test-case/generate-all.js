var nodeAtlas = require("node-atlas")(),
	exec = require('child_process').exec;
	
nodeAtlas.generated(function () {
    exec(__dirname + "/generate-css-doc.bat", function (err, stdout) {
        nodeAtlas.log("Documentation CSS generation progress...");
        nodeAtlas.log(stdout);
        nodeAtlas.log("Documentation CSS generation done !");
        exec(__dirname + "/generate-js-doc.bat", function (err, stdout) {
            nodeAtlas.log("Documentation JS generation progress...");
            nodeAtlas.log(stdout);
            nodeAtlas.log("Documentation JS generation done !");
        });
    });
}).run({
    generate: true
});