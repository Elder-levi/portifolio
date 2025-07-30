const toggleTheme = document.getElementById("toggLeTheme")
const rootHtml = document.documentElement


toggleTheme.addEventListener("click", ()=>{
const curreTheme= rootHtml.getAttribute("data-theme");

curreTheme == "dark" ? rootHtml.setAttribute("data-theme" , "light") : rootHtml.setAttribute("data-theme" , "dark")

toggleTheme.classList.toggle("bi-sun")
toggleTheme.classList.toggle("bi-moon-stars")

})
