console.log("page loaded...");

function editProfile() {
    var person = prompt("Please enter your new name: ", "Brave Sir Robin");
    if (person != null) {
        document.getElementById("userName").innerText = person;
        if (person == "Brave Sir Robin") {
            var myElement = document.querySelector(".avatar-m");
            // "He was not afraid to die O, Brave Sir Robin!"
            myElement.src = "images/bsr.jpeg";
        }
    }
}

function requestHandler(element) {
    const myBadges = document.querySelectorAll(".badge");

    // remove .card-list-item
    element.parentElement.parentElement.remove();

    if (element.alt == "accept") {
        // Accept friend req == -1 request and +1 connection 
        myBadges[0].innerText = parseInt(myBadges[0].innerText) - 1;
        myBadges[1].innerText = parseInt(myBadges[1].innerText) + 1;
    } else {
        // Reject friend req == -1 request
        myBadges[0].innerText = parseInt(myBadges[0].innerText) - 1;
    }
}