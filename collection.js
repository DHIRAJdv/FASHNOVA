var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) { // <-- Fixed "indexOf" typo
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
