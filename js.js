var width;
window.addEventListener("resize", function () {
  width =
    window.innerWidth || document.documentElement.clientWidth || screen.width;
});

console.log(width);
var squares = Array(5500)
  .fill(null)
  .map(() => {
    var square = document.createElement("div");
    square.id = "square";
    square.className = "square";

    //> ON MOUSEOVER
    square.addEventListener("mouseover", function (event) {
      const backgroundColor = generateRandomColor();
      console.log(backgroundColor);
      square.style.background = backgroundColor;
      square.style.width = "35px";
      square.style.height = "30px";

      square.style.transition = "width 2s, height 2s";
      square.style.transitionTimingFunction = "ease";

    });
    //< prev sibling
    square.addEventListener("mouseover", function (event) {
      const backgroundColor = generateRandomColor();

      //   square.previousElementSibling.style.background = backgroundColor;
    });
    //< next sibling
    square.addEventListener("mouseover", function (event) {
      const backgroundColor = generateRandomColor();

      // square.nextElementSibling.style.background = backgroundColor;
    });

    //> ON MOUSEOUT
    square.addEventListener("mouseout", function (event) {
      const backgroundColor = generateRandomColor();

      square.style.background = "";
      square.previousElementSibling.style.background = "";
      square.nextElementSibling.style.background = backgroundColor;
      square.style.width = "5px";
      square.style.height = "5px";
      square.style.borderRadius = "50%";
      setInterval(() => {
        square.style.width = "50px";
        square.style.height = "50px";
      }, 1000);
    });

    return square;
  });

window.onload = function () {
  squares.forEach((square) => document.body.appendChild(square));
};

function generateRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var red2 = Math.floor(Math.random() * 256);
  var green2 = Math.floor(Math.random() * 256);
  var blue2 = Math.floor(Math.random() * 256);
  return `linear-gradient(198deg, rgba( ${red} , ${green} , ${blue}, 1 ) 0%, rgba(${red2}, ${green2}, ${blue2}, 1) 100%)`;
}

let h1 = document.getElementById("h1");
h1.addEventListener("mouseover", function (event) {
  h1.style.backgroundColor = "black";
});

// linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(250,250,250,1) 100%);
