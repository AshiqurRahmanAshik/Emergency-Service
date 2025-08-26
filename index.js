const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (e) {
  // Card Heart Icon Functionalities
  if (e.target.className.includes("fa-heart")) {
    const totalHeart = document.getElementById("total-heart").innerText;
    const updatedHeart = Number(totalHeart) + 1;
    document.getElementById("total-heart").innerText = updatedHeart;
  }
  // Service Name & Service Number Alert
  const callBtn = e.target.closest(".call-btn");
  if (callBtn) {
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    alert(`📞Calling ${serviceName} ${serviceNumber}`);
  }
});
console.log("Live");
