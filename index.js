// Card Heart Icon Functionalities
const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const totalHeart = document.getElementById("total-heart").innerText;
    const updatedHeart = Number(totalHeart) + 1;
    document.getElementById("total-heart").innerText = updatedHeart;
  }
});
