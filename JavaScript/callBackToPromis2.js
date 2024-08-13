function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Downloading from the url " + url);
    setTimeout(function down() {
      console.log("Download Completed");
      const d = "data from the url";
      resolve(d);
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading,", file, "to url", url);
    setTimeout(function upload() {
      console.log("Upload complete of file", file);
      const response = "SUCCESS";
      resolve(response);
    }, 6000);
  });
}

download("www.xyz.com")
.then(function processDownload(data) {
    console.log("Downloading done with following data", data);
    return writeFile(data);
})
.then(function processWrite(value) {
    console.log("Data written in the file ", value);
    return uploadData(value, "www.abc.com");
})
.then(function processUpload(value){
    console.log("Uploading state", value);
})

// Here readability enhances and also the no inversion of control
// Pyramid of doom problem is not here.