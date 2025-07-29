const toggleTheme = document.getElementById("toggLeTheme")
const rootHtml = document.documentElement


toggleTheme.addEventListener("click", ()=>{
const curreTheme= rootHtml.getAttribute("data-theme");

toggleTheme.classList.toggle("bi-sun")
toggleTheme.classList.toggle("bi-moon-stars")

})