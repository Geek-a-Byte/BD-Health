import animate, {delay} from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const random = (min, max) =>
  Math.random() * (max - min) + min;

const content = {
  
  h1: "BD Health",
  p: "for the people . of the people . by the people"
};

const elements = [];

const dom = Object.entries(content).reduce((fragment, [type, text]) => {
  const node = text.split("").reduce((element, character) => {
    const span = document.createElement("span");
    span.textContent = character;
    if (character == " ") span.className = "space";
    elements.push(span);
    element.append(span);
    return element;
  }, document.createElement(type));

  fragment.append(node);
  return fragment;
}, document.createDocumentFragment());

document.getElementById('hello').append(dom);

const play = async () => {
  await animate({
    elements,
    duration: 1500,
    delay: index => index * 15,
    easing: "out-elastic 1 .7",
    opacity: [0, 1],
    transform: ["translate(250px) scale(0)", "0 1"]
  });

  await animate({
    elements,
    duration: 1500,
    delay: 1500,
    easing: "out-circular",
    opacity: [1, 0],
    transform: () => [
      "translate(0vw, 0vh) scale(1) rotate(0turn)",
      `${random(-100, 100)} ${random(-100, 100)} ${random(5, 15)} ${random(-1, 1)}`
    ]
  });

  await delay(1500);
  play();
};

play();