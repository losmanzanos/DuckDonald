// Get the button and add an event listener to it
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default button action

  // Create 100 random duck emojis
  for (let i = 0; i < 100; i++) {
    const duckEmoji = document.createElement("span");
    duckEmoji.textContent = "🦆";
    duckEmoji.style.position = "absolute";
    duckEmoji.style.fontSize = `${Math.random() * (50 - 20) + 20}px`; // Random size
    duckEmoji.style.top = `${Math.random() * window.innerHeight}px`; // Random vertical position
    duckEmoji.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
    duckEmoji.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation

    document.body.appendChild(duckEmoji);
  }

  // Redirect after a brief delay to let the ducks appear
  setTimeout(() => {
    window.location.href =
      "https://duckdonaldtrump.printful.me/product/uck-donald-trump-t-shirt"; // Redirect to Printful
  }, 1000); // Delay of 1 second
});
