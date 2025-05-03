document.addEventListener('DOMContentLoaded', function() {
  const originalImageStates = new Map(); // Store original parent, classes, and next sibling
  const breakpoint = 768; // Define your breakpoint

  function moveImagesOnSmallScreen() {
      if (window.innerWidth < breakpoint) {
          const imageContainers = document.querySelectorAll('.Contains-Img');

          imageContainers.forEach(container => {
              const image = container.querySelector('img.images');

              if (image && !originalImageStates.has(image)) {
                  // Store original parent, classes, and the next sibling
                  originalImageStates.set(image, {
                      parent: image.parentNode,
                      classes: Array.from(image.classList),
                      nextSibling: image.nextElementSibling,
                  });
                  container.insertAdjacentElement('afterend', image);
                  image.classList.remove('float-left', 'float-right'); // Remove any float classes
                  image.classList.add('no-float-small-js'); // Add a JS-specific no-float class
              }
          });
      } else {
          // Move images back to their original state, maintaining original order
          originalImageStates.forEach((originalState, image) => {
              if (image.parentNode !== originalState.parent) {
                  if (originalState.nextSibling) {
                      originalState.parent.insertBefore(image, originalState.nextSibling);
                  } else {
                      originalState.parent.appendChild(image);
                  }
                  image.classList.remove('no-float-small-js');
                  originalState.classes.forEach(className => image.classList.add(className));
              }
          });
          originalImageStates.clear(); // Clear the stored states after moving back
      }
  }

  // Run on initial load
  moveImagesOnSmallScreen();

  // Run on resize
  window.addEventListener('resize', moveImagesOnSmallScreen);
});