let cookie_box = document.getElementsByClassName("cookie-alert")[0]

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        cookie_box.classList.add("show_cookie")
    }, 1000);
})


$(document).ready(function () {
    setTimeout(function () {
        $('#exampleModal').modal('show');
    }, 1000);
});