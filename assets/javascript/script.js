// Event Navigasi
const navigationList = document.querySelector("#navMenu");
const hbgrElement = document.querySelector("#hamburger-menu");

// Ketika Hamburger Menu di Click {
hbgrElement.onclick = () => {
  navigationList.classList.toggle("-right-full");
  navigationList.classList.toggle("right-0");
};

// Event Search
const searchModal = document.querySelector("#search-modal");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

// Ketika Search Button di Click
searchButton.onclick = () => {
  searchModal.classList.toggle("scale-x-0");
  searchModal.classList.toggle("search-x-100");
  searchBox.focus();
};

// Event Shopping Cart
const cartModal = document.querySelector("#shopping-cart-modal");
const cartButton = document.querySelector("#shopping-cart-button");

cartButton.onclick = () => {
  cartModal.classList.toggle("-right-full");
  cartModal.classList.toggle("right-0");
};

// ================================================================================================

// Click diluar target untuk menghilangkan target kembali {
document.addEventListener("click", function (clickIn) {
  // Jika yang di Click bukan Hamburger Menu dan Sidebar Menu {
  if (
    !hbgrElement.contains(clickIn.target) &&
    !navigationList.contains(clickIn.target)
  ) {
    navigationList.classList.remove("right-0");
    navigationList.classList.add("-right-full");
  }
  // Ketika Sidebar aktif dan diresize hingga mencapai medium screen {
  if (window.innerWidth >= 768) {
    navigationList.classList.remove("right-0");
    navigationList.classList.add("-right-full");
  }

  // ===================================================================

  // Search Button
  if (
    !searchButton.contains(clickIn.target) &&
    !searchModal.contains(clickIn.target)
  ) {
    searchModal.classList.remove("scale-x-100");
    searchModal.classList.add("scale-x-0");
  }

  // ===================================================================

  // Shopping Cart

  if (
    !cartButton.contains(clickIn.target) &&
    !cartModal.contains(clickIn.target)
  ) {
    cartModal.classList.remove("right-0");
    cartModal.classList.add("-right-full");
  }
});

document.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    navigationList.classList.remove("right-0");
    navigationList.classList.add("-right-full");
    searchModal.classList.remove("scale-x-100");
    searchModal.classList.add("scale-x-0");
    cartModal.classList.remove("right-0");
    cartModal.classList.add("-right-full");
  }
});

// ================================================================================================

// Event Pilihan Kategori Daftar Menu
window.onscroll = function () {
  var stickySet = document.getElementById("stickySet");
  var listMenu = document.getElementById("listMenu");
  var stickySetParent = stickySet.parentElement;
  var stickySetOffset = stickySetParent.offsetTop;
  var underLargeWidth = window.innerWidth < 1024;
  var x = listMenu.getBoundingClientRect();

  searchModal.classList.remove("scale-x-100");
  searchModal.classList.add("scale-x-0");

  if (x.bottom >= window.innerHeight) {
    if (window.pageYOffset > stickySetOffset && underLargeWidth) {
      stickySet.classList.add("fixed");
      listMenu.classList.add("pt-60");
    } else if (window.pageYOffset > stickySetOffset) {
      stickySet.classList.add("fixed");
    } else {
      stickySet.classList.remove("fixed");
      listMenu.classList.remove("pt-60");
    }
  } else {
    stickySet.classList.remove("fixed");
    listMenu.classList.remove("pt-60");
  }
};
