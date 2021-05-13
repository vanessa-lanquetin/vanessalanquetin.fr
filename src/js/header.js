export default {
  toggleSideBar: () => {
    const $header = document.querySelector(".header-container");
    if($header.classList.contains('open')) {
      $header.classList.remove("open");
    } else {
      $header.classList.add("open");
    }
  }
}