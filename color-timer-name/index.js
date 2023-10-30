function generateRandomColor() {
    // Generating random values for RGB
    var red = Math.floor(Math.random() * 200);
    var green = Math.floor(Math.random() * 210);
    var blue = Math.floor(Math.random() * 230);
  
    // Creating the RGB string
    var randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  
    return randomColor;
  }

function changeBackgroundColor(){
    let bg = document.getElementById("random-color-section");
    bg.style.backgroundColor = generateRandomColor();
}
  