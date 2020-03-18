let themeToggle = document.querySelector("#theme-toggle");
let themeLight = document.querySelector("#theme-light");
let themeDark = document.querySelector("#theme-dark");

// Only need to change theme if the user saved dark
// as light is default

if (localStorage.getItem("theme") == "dark") {
  console.log("saved as dark, setting!");
  setDark();
}

// If the saved theme is either light or never set,
// then the theme is light and must therefor go to dark
themeToggle.addEventListener("click", _ => {
  if (
    localStorage.getItem("theme") == "light" ||
    localStorage.getItem("theme") == null
  ) {
    console.log("switching to dark!");
    setDark();
  } else {
    console.log("switching to light!");
    setLight();
  }
});

function setLight() {
  themeDark.disabled = true;
  themeLight.disabled = false;
  themeToggle.setAttribute("src", "assets/moon.svg");
  localStorage.setItem("theme", "light");
}

function setDark() {
  themeDark.disabled = false;
  themeLight.disabled = true;
  themeToggle.setAttribute("src", "assets/sun.svg");
  localStorage.setItem("theme", "dark");
}
