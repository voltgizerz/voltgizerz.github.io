function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

function randomizeIdsAndClasses() {
  // Randomize all IDs
  document.querySelectorAll('[id]').forEach(element => {
      const randomId = generateRandomString(12);
      element.setAttribute('id', randomId);
  });

  // Randomize all classes
  document.querySelectorAll('[class]').forEach(element => {
      const randomClass = generateRandomString(12);
      element.setAttribute('class', randomClass);
  });
}

// Run the function on page load
window.onload = randomizeIdsAndClasses;