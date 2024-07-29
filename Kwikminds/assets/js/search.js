function search(val) {
  let search_response = document.getElementsByClassName("search_response-output")[0].classList;
  
  if (val.value.trim().length > 0) {
    if (search_response.contains("d-none")) {
      search_response.remove("d-none");

      // Adding event listener with a slight improvement
      setTimeout(() => {
        document.addEventListener(
          "click",
          function handleClickOutside(event) {
            if (!val.contains(event.target)) {
              search_response.add("d-none");
              document.removeEventListener("click", handleClickOutside);
            }
          }
        );
      }, 200);
    }
  } else {
    search_response.add("d-none");
  }
}


const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', function () {
    // if (searchBar.style.display == 'none') {

    //     searchBar.style.display = 'block'; // Show the search bar
    // } else {
    //     searchBar.style.display = 'none'; // Hide the search bar
    // }
    searchBar.classList.toggle("d-none");
    searchBar.classList.add("show-search-bar");

});


