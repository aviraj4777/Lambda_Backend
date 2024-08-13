function download(url ,cb) {
    console.log("Downloading from the url " + url);
    setTimeout(function down() {
        console.log("Download Completed");
        const d = "data from the url";
        cb(d);
    }, 4000)
    
}

function writeFile(data, cb) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
        console.log("Completed writing data in a file");
        const filename = "file.txt";
        cb(filename);
    }, 5000);
}

function upload(url, file, cb) {
    console.log("Started uploading,", file, "to url", url);
    setTimeout(function upload() {
        console.log("Upload complete of file", file);
        const response = "SUCCESS";
        cb(response);
    }, 6000);
}

// download("www.abc.com", function process(content) {
//     console.log("Downloaded data is " + content);
// });

// writeFile("abcdef", function process(fileName) {
//     console.log("file written with name", fileName);
// });

download("www.abc.com", function proDownload(content) {
    console.log("Downloaded data is", content);
    writeFile(content, function processWrite(fileName) {
        console.log("File written to ", fileName);
        upload("www.xyz.com", fileName, function processUpload(response) {
            console.log("Upload State", response);
        });
    })
})


//Here callback hell exist.
//Also Inversion of control is here.