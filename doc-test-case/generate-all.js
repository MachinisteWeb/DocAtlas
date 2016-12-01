var log = console.log;
require("node-atlas")().generated(function () {
    require('child_process').exec(__dirname + "/generate-css-doc.bat", function (err, stdout) {
        log("Documentation CSS generation progress...");
        log(stdout);
        log("Documentation CSS generation done !");
        require('child_process').exec(__dirname + "/generate-js-doc.bat", function (err, stdout) {
            log("Documentation JS generation progress...");
            log(stdout);
            log("Documentation JS generation done !");
        });
    });
}).run({
    generate: true
});