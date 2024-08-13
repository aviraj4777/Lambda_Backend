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


// function doAfterReceiving(value) {
//     let future = iter.next(value);
//     console.log("future is", future);
//     if (future.done) return;
//     future.value.then(doAfterReceiving);
// }

// function* steps() {
//     const downloadedData = yield download("www.sys.com");
//     console.log("Data Downloaded is", downloadedData);
//     const fileWritten = yield writeFile(downloadedData);
//     console.log("File written is", fileWritten);
//     const uploadResponse = yield uploadData(fileWritten, "www.gdrive.com");
//     console.log("Uploaded response is", uploadResponse);
//     return uploadResponse
// }

// const iter = steps();
// const future = iter.next();
// future.value.then(doAfterReceiving);


// This is the beginning of async await. All these iterators and generators are wrapped beautifully inside async await. Just replace function* with async function and yield with await and by simply calling steps all your tasks is done.

async function steps() {
    console.log("start");
    const downloadedData = await download("www.sys.com");
    console.log("Data Downloaded is", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("File written is", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.gdrive.com");
    console.log("Uploaded response is", uploadResponse);
    return uploadResponse;
}

steps().then((value) => console.log("we have completed steps with", value));
console.log("outside");

for (let i = 0; i < 100000000; i++) {

}
setTimeout(function f() {console.log("timer done")}, 4000);
console.log("for loop done");