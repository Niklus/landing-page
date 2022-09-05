/**
 * Global Variables
 *
 */
const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");
const VALUE = 150;
let links = null;

/* Build the nav*/

navList.innerHTML = "";

sections.forEach((section) => {
  const id = section.id;
  const data = section.dataset.nav;
  navList.innerHTML += `
    <li><a class="menu__link" data-nav="${data}" href="#${id}">${data}</a></li>
  `;
});

links = document.querySelectorAll(".menu__link");

// Helper Function
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= VALUE && box.bottom >= VALUE) {
      //apply active state on current section and corresponding Nav link

      section.classList.add("your-active-class");

      links.forEach((link) => {
        if (link.dataset.nav === section.dataset.nav) {
          link.classList.add("your-active-class");
        }
      });
    } else {
      //Remove active state from other section and corresponding Nav link

      section.classList.remove("your-active-class");

      links.forEach((link) => {
        if (link.dataset.nav === section.dataset.nav) {
          link.classList.remove("your-active-class");
        }
      });
    }
  }
}

// Apply smooth scrolling
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Make sections active
document.addEventListener("scroll", () => makeActive());

//Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = `${document.getElementById("fname").value} ${
    document.getElementById("lname").value
  }`;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("subject").value || "NO MESSAGE";

  const subscription = {
    name,
    email,
    msg,
  };

  alert(
    JSON.stringify(
      {
        status: "success",
        subscription,
      },
      null,
      3
    )
  );

  form.reset();
});
