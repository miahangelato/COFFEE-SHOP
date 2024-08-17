const filterList = document.querySelector(".filter");
const coffeefilterButtons = filterList.querySelectorAll(".coffee-filter-button");
const menu = document.querySelectorAll(".menu");

function goBack() {
  window.history.back(); 
}

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('backToTop');

  // Show or hide the back-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Smooth scroll to top when button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

let menuIndex = 0;

menu.forEach((menu) => {
  menu.style.viewTransitionName = `menu-${++menuIndex}`;
});

coffeefilterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let coffeeCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterEvents(coffeeCategory);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterEvents(coffeeCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterEvents(filter) {
  menu.forEach((menu) => {
    let eventCategory = menu.getAttribute("data-category");

    if (filter === "all" || filter === eventCategory) {
      menu.removeAttribute("hidden");
    } else {
      menu.setAttribute("hidden", "");
    }
  });
}
