# Color Filpper

Color filpper is an application responsipe to change color of the body randomly. It is important for people want to change the color of application as the user like.

<br>
<br>
<a href="https://ahmed-abo-rafat.github.io/Recipe-page/">
  <img
  src="./Capture.PNG"
  alt="banner"
  title="color filpper"
  style="display: inline-block; margin: 0 auto; width: 100%;"
  />
</a>

<br>

## Live Site:

- Link: https://ahmed-abo-rafat.github.io/Recipe-page/

## Features

- filpper color component: responsaple to change color between 4 colors randomly.
- Hex color component: it is an javascript componet lead to change any color randomly.
- using addeventlisenger to add event on button to change color randomly.

## Technologies

Project is created with:

- HTML
- CSS
- javascript

### What I learned

The best thing i learned from this project how to add event to button and bild function responsable change color randomly without load page as you see in the code below.

```js
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.innerHTML = color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
```

## Author

- Website - [Ahmed Rafat](https://ahmed-abo-rafat.github.io/Portfolio/)
- Linked In - [Ahmed Rafat](https://www.linkedin.com/in/ahmed-rafat-a489301a2/)
- Gmail - [Ahmed Rafat](https://mail.google.com/mail/u/1/#inbox)
- Phone - (01060843933)
