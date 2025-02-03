// const menu = document.querySelector('.menu-btn');
// const menuList = document.querySelector('nav');
// const icon = document.querySelector('.icon');
// const links = document.querySelectorAll('nav ul li a');
// menu.addEventListener('click', () => {
//   if (menuList.style.left === '0px') {
//     menuList.style.left = '-100dvw';
//     icon.classList.add('fa-bars');
//     icon.classList.remove('fa-xmark');
//     icon.style.color="white";
//   } else {
//     menuList.style.left = '0px';
//     icon.classList.remove('fa-bars');
//     icon.classList.add('fa-xmark');
//     icon.style.color="crimson";
//   }
// });

// links.addEventListener('click', () => {
//   menuList.style.left='-100dvw';
//   icon.classList.add('fa-bars');
//   icon.classList.remove('fa-xmark');
//   icon.style.color="white";
// });

// links.forEach(function(link) {
//   link.addEventListener('click', () => {
//     menuList.style.left = '-100dvw';
//     icon.classList.add('fa-bars');
//     icon.classList.remove('fa-xmark');
//     icon.style.color = "white";
//   });
// });


function checkSectionInView() {
  const enphoto = document.querySelector('#enphoto');
  const about = document.querySelector('#about');
  const project = document.querySelector('#project');
  const contact = document.querySelector('#contact');

  const skillintro = document.querySelector('#skillintro');
  const sections=[enphoto,about,project,skillintro,contact]
  
  const navLinks = document.querySelectorAll('.nav-links');
//   const footer = document.querySelector('footer');

  let mostVisibleSectionIndex = -1;
  let maxVisibility = 0;

  // Remove 'nav-active' class from all nav links first
  navLinks.forEach(link => link.classList.remove('nav-active'));

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Calculate the visible height of the section within the viewport
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

    // Calculate the total height of the section
    const sectionHeight = rect.height;

    // Calculate the percentage of the section visible in the viewport
    const visibility = visibleHeight / sectionHeight;

    // If this section is more visible than the previous one, update the most visible section
    if (visibility > maxVisibility) {
      maxVisibility = visibility;
      mostVisibleSectionIndex = index;
    }
  });

  // Check if the footer is visible in the viewport
//   const footerRect = footer.getBoundingClientRect();
//   const footerVisible = footerRect.top <= window.innerHeight && footerRect.bottom > 0;

//   // If the footer is visible, set the 5th section active
//   if (footerVisible) {
//     mostVisibleSectionIndex = sections.length - 1; // Set to last section (5th section)
//   }

  // If a section is most visible, apply the nav-active class to its corresponding link
  if (mostVisibleSectionIndex !== -1) {
    navLinks[mostVisibleSectionIndex].classList.add('nav-active');
  }
}

// Listen to the scroll event
window.addEventListener('scroll', checkSectionInView);

// Initialize by checking if any section is in view when the page loads
document.addEventListener('DOMContentLoaded', checkSectionInView);
// Select the HTML, CSS, and JS elements
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const mysql = document.querySelector(".mysql");
const problem_solving = document.querySelector(".problem_solving");

const py = document.querySelector(".py");
const htmlimg = document.querySelector(".htmlimg");
const mysqlimg = document.querySelector(".mysqlimg");

const cssimg = document.querySelector(".cssimg");
const pyimg = document.querySelector(".pyimg");
const problem_solvingimg = document.querySelector(".problem_solvingimg");

const jsimg = document.querySelector(".jsimg");
// Add event listener for the mouseover event on the 'html' element

// Function to create progress bar with counter
function createProgressBar(targetPercentage, container) {
    // Create a div for the progress bar container
    const p = document.createElement("div");
    p.classList.add("progress-container");
  
    // Set the inner HTML for the progress bar structure (with a counter)
    p.innerHTML = `
      <div class="progress">
        <div class="progress-value"></div>
        <!-- Counter element -->
      </div> <span class="counter">0%</span>
    `;
  
    // Append the progress container to the specified container (html, css, js)
    container.appendChild(p);
  
    // Start the progress bar animation and counter update
    const progressValue = p.querySelector(".progress-value");
    const counter = p.querySelector(".counter");
    let progress = 0;
  
    // Function to animate the progress bar and update the counter
    const interval = setInterval(() => {
      if (progress <= targetPercentage) {
        progressValue.style.width = `${progress}%`;
        counter.textContent = `${progress}%`; // Update the counter
        progress += 1; // Increment the progress
      } else {
        clearInterval(interval); // Stop the interval once the target is reached
      }
    }, 10); // Update every 30ms for smooth animation
  }




  
  // HTML Progress Bar (90%)
  htmlimg.addEventListener("mouseover", () => {
    createProgressBar(60, html); // 90% for HTML
  });
  htmlimg.addEventListener("mouseleave", () => {
    const progressContainer = html.querySelector(".progress-container");
    if (progressContainer) {
      progressContainer.remove(); // This removes the progress bar container
    }
  });
  
  // CSS Progress Bar (90%)
  cssimg.addEventListener("mouseover", () => {
    createProgressBar(60, css); // 90% for CSS
  });
  cssimg.addEventListener("mouseleave", () => {
    const progressContainer = css.querySelector(".progress-container");
    if (progressContainer) {
      progressContainer.remove(); // This removes the progress bar container
    }
  });
  
  // JS Progress Bar (80%)
  jsimg.addEventListener("mouseover", () => {
    createProgressBar(80, js); // 80% for JS
  });
  jsimg.addEventListener("mouseleave", () => {
    const progressContainer = js.querySelector(".progress-container");
    if (progressContainer) {
      progressContainer.remove(); // This removes the progress bar container
    }
  });
    // HTML Progress Bar (90%)
    pyimg.addEventListener("mouseover", () => {
      createProgressBar(80, py); // 90% for HTML
    });
    pyimg.addEventListener("mouseleave", () => {
      const progressContainer = py.querySelector(".progress-container");
      if (progressContainer) {
        progressContainer.remove(); // This removes the progress bar container
      }
    });
 // HTML Progress Bar (90%)
 mysqlimg.addEventListener("mouseover", () => {
  createProgressBar(80, mysql ); // 90% for HTML
});
mysqlimg.addEventListener("mouseleave", () => {
  const progressContainer = mysql.querySelector(".progress-container");
  if (progressContainer) {
    progressContainer.remove(); // This removes the progress bar container
  }
}); problem_solvingimg.addEventListener("mouseover", () => {
  createProgressBar(100, problem_solving ); // 90% for HTML
});
problem_solvingimg.addEventListener("mouseleave", () => {
  const progressContainer = problem_solving.querySelector(".progress-container");
  if (progressContainer) {
    progressContainer.remove(); // This removes the progress bar container
  }
});
