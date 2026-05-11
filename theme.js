function updateDarkModeButtons(){
  const isDark = document.body.classList.contains("dark-mode");
  const buttons = document.querySelectorAll(".dark-mode-toggle");

  buttons.forEach((button) => {
    const mode = button.dataset.mode || "text";

    if(mode === "icon"){
      button.innerText = isDark ? "☀️" : "🌙";
    } else {
      button.innerText = isDark ? "☀️ 주간" : "🌙 야간";
    }
  });
}

function applySavedTheme(){
  const savedTheme = localStorage.getItem("todayParentingTheme");

  if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  updateDarkModeButtons();
}

window.toggleDarkMode = function(){
  const nextDark =
    !document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "todayParentingTheme",
    nextDark ? "dark" : "light"
  );

  applySavedTheme();
};

document.addEventListener(
  "DOMContentLoaded",
  applySavedTheme
);