// -------------------  Loader  -------------------

let loader = document.querySelector(".loader")

window.addEventListener("load", vanish)

function vanish() {
  loader.classList.add("dispper")
}

// -------------------  alert  -------------------
function resAlert() {
  Swal.fire({
    title: '<h4 class="text-capitalize mb-3">to make a reservation, please contact us on this numbers</h4>',
    icon: 'info',
    html:'<i class="fa-solid fa-phone me-3"></i><label class="h5">+212 123 546 789</label>' +'<br>' + '<i class="fa-solid fa-phone me-3"></i><label class="h5">+212 987 654 321</label>',
    focusConfirm: false,
    confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',
})
}

function delvAlert() {
  Swal.fire({
    title: '<h4 class="text-capitalize mb-3">to order a delivery. please contact us on this numbers</h4>',
    icon: 'info',
    html:'<i class="fa-solid fa-phone me-3"></i><label class="h5">+212 123 546 789</label>' +'<br>' + '<i class="fa-solid fa-phone me-3"></i><label class="h5">+212 987 654 321</label>',
    focusConfirm: false,
    confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',
})
}