// typing animation

var typed = new Typed(".typing", {
  strings: [
    "",
    "Python Developer",
    "Cloud Computing Enthusiast",
    "AI Innovator",
    "Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", () => {
    allSection.forEach((section) => {
      section.classList.remove("back-section");
    });
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
    showSection(a);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(el) {
  allSection.forEach((section) => {
    section.classList.remove("active");
  });
  const target = el.getAttribute("href").slice(1);
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(el) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("actie");
    const target = el.getAttribute("href").slice(1);
    if (
      target === navList[i].querySelector("a").getAttribute("href").slice(1)
    ) {
      navList[i].querySelector("a").classList.add("actie");
    }
  }
}
const hireMe = document.querySelector(".hire-me");
hireMe.addEventListener("click", () => {
  showSection(hireMe);
  updateNav(hireMe);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  // for (let i = 0; i <totalSection; i++) {
  //     allSection[i].classList.toggle("open");

  // }
}

// Existing code (typing animation, navigation, etc.) remains unchanged
// typing animation
// var typed = new Typed(".typing", {
//   strings: [
//     "",
//     "Python Developer",
//     "Cloud Computing Enthusiast",
//     "AI Innovator",
//     "Problem Solver",
//   ],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

// // Aside
// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length,
//   allSection = document.querySelectorAll(".section"),
//   totalSection = allSection.length;

// for (let i = 0; i < totalNavList; i++) {
//   const a = navList[i].querySelector("a");
//   a.addEventListener("click", () => {
//     allSection.forEach((section) => {
//       section.classList.remove("back-section");
//     });
//     for (let j = 0; j < totalNavList; j++) {
//       if (navList[j].querySelector("a").classList.contains("active")) {
//         allSection[j].classList.add("back-section");
//       }
//       navList[j].querySelector("a").classList.remove("active");
//     }
//     a.classList.add("active");
//     showSection(a);
//     if (window.innerWidth < 1200) {
//       asideSectionTogglerBtn();
//     }
//   });
// }

// function showSection(el) {
//   allSection.forEach((section) => {
//     section.classList.remove("active");
//   });
//   const target = el.getAttribute("href").slice(1);
//   document.querySelector("#" + target).classList.add("active");
// }

// function updateNav(el) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//     const target = el.getAttribute("href").slice(1);
//     if (
//       target === navList[i].querySelector("a").getAttribute("href").slice(1)
//     ) {
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
// }
// const hireMe = document.querySelector(".hire-me");
// hireMe.addEventListener("click", () => {
//   showSection(hireMe);
//   updateNav(hireMe);
// });

// const navTogglerBtn = document.querySelector(".nav-toggler"),
//   aside = document.querySelector(".aside");

// navTogglerBtn.addEventListener("click", () => {
//   asideSectionTogglerBtn();
// });

// function asideSectionTogglerBtn() {
//   aside.classList.toggle("open");
//   navTogglerBtn.classList.toggle("open");
// }

// // Contact form submission
// const contactForm = document.getElementById("contact-form");
// const formMessage = document.getElementById("form-message");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = contactForm.querySelector('input[name="name"]').value.trim();
//   const email = contactForm.querySelector('input[name="email"]').value.trim();
//   const subject = contactForm
//     .querySelector('input[name="subject"]')
//     .value.trim();
//   const message = contactForm
//     .querySelector('textarea[name="message"]')
//     .value.trim();

//   if (!name || !email || !subject || !message) {
//     formMessage.className = "form-message error";
//     formMessage.textContent = "Please fill in all fields.";
//     return;
//   }

//   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     formMessage.className = "form-message error";
//     formMessage.textContent = "Please enter a valid email address.";
//     return;
//   }

//   setTimeout(() => {
//     formMessage.className = "form-message success";
//     formMessage.textContent =
//       "Thank you for your message! Grace will respond promptly to drive innovation together.";
//     contactForm.reset();
//   }, 500);

//   setTimeout(() => {
//     formMessage.className = "form-message";
//     formMessage.textContent = "";
//   }, 5000);
// });
