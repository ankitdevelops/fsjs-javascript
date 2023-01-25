// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
  const fileNameArray = fileName.split(".");
  console.log(fileNameArray);

  if (fileNameArray.length === 1 || fileNameArray[1] === "") {
    console.log("File has no extension");
  } else {
    console.log(`The extension of the file is: ${fileNameArray.pop()}`);
  }
};

getFileExtension("hello.png");
