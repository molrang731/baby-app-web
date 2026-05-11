(function(){
  const savedTheme = localStorage.getItem("todayParentingTheme");

  if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  }

  window.toggleDarkMode = function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("todayParentingTheme", "dark");
    } else {
      localStorage.setItem("todayParentingTheme", "light");
    }

    updateDarkModeButtons();
  };

  window.updateDarkModeButtons = function(){
    const isDark = document.body.classList.contains("dark-mode");
    const buttons = document.querySelectorAll(".dark-mode-toggle");

    buttons.forEach((button) => {
      button.innerText = isDark ? "☀️ 라이트" : "🌙 야간";
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateDarkModeButtons();
  });
})();