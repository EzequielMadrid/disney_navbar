let searchIcon = document.getElementById("search-icon");
let searcher = document.getElementById("searcher");
let burgerIcon = document.getElementById("burger-icon");
let subnav = document.getElementById("subnav");

function showSearcher() {
  searcher.style.display = searcher.style.display === "none" ? "block" : "none";
  searcher.focus();
}

function showSubnav() {
  subnav.style.display = subnav.style.display === "none" ? "flex" : "none";
}
