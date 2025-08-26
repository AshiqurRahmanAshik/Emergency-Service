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
    const totalCoin = document.getElementById("total-coin").innerText;
    const totalCoinNumber = Number(totalCoin);
    const NetCoinNumber = totalCoinNumber - 20;
    if (NetCoinNumber < 0) {
      alert(
        `❌ You don't have sufficient coin. You need at least 20 coins to call `
      );
      return;
    }
    document.getElementById("total-coin").innerText = NetCoinNumber;
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    alert(`📞Calling ${serviceName} ${serviceNumber}`);
  }
});
console.log("Live");
