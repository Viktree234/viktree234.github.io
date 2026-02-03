/**
 * Switches between pages by toggling the 'active' class
 * @param {number} pageNumber - The ID suffix of the page to show
 */
function goTo(pageNumber) {
  // Remove active class from all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  
  // Add active class to the selected page
  const targetPage = document.getElementById('page' + pageNumber);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

/**
 * Creates a floating heart or bouquet element and adds it to the body
 */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  
  // Randomly choose between heart and bouquet
  heart.innerText = Math.random() > 0.5 ? "❤️" : "💐";
  
  // Randomize position and animation properties
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 12) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  
  document.body.appendChild(heart);
  
  // Remove the element after animation completes to keep the DOM clean
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Start the heart animation loop
setInterval(createHeart, 400);