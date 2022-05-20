//handson 2
let file = prompt("file name")
let ext = file.slice(-3)

if(ext == "jpg" || ext == "png") {
  console.log("it is an image file")
}
else{
   console.log("it is not an image file")
}