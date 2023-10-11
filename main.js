const headerTextElement = document.getElementById('headerText');
const texts = ["I'm Richard S. Edwards!", "I'm a software developer!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    headerTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex >= currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 400);
    } else {
      setTimeout(typeEffect, 100);
    }
  } else {
    headerTextElement.textContent = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex === 2) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 100);
    }
  }
}

typeEffect(); // Invoke the function immediately to start typing