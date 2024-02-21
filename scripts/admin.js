function closeCard() {
  var successCard = document.getElementById("successCard");
  successCard.style.display = "none";
}

function toggleProfileCard() {
  var profileCard = document.getElementById("profileCard");
  profileCard.style.display =
    profileCard.style.display === "none" || profileCard.style.display === ""
      ? "block"
      : "none";
}

document.addEventListener("click", function (event) {
  var profileCard = document.getElementById("profileCard");
  var profileIcon = document.getElementById("profileIcon");

  if (
    event.target !== profileCard &&
    event.target !== profileIcon &&
    !profileCard.contains(event.target)
  ) {
    profileCard.style.display = "none";
  }
});

// var logOut = document.getElementById("logout");
// logOut.addEventListener("click", function () {
//   console.log("Logout Pressed");
// });
