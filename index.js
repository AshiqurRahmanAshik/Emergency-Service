const date = new Date().toLocaleTimeString();
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
    if (totalCoinNumber < 20) {
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

  // Call History Append
  const callHistoryContainer = document.getElementById(
    "call-history-container"
  );
  console.log(callHistoryContainer);
  const serviceName =
    callBtn.parentNode.parentNode.children[1].children[0].innerText;
  const serviceNumber =
    callBtn.parentNode.parentNode.children[1].children[2].innerText;
  console.log(date);
  const newHistory = document.createElement("div");
  newHistory.innerHTML = `
          <div class="flex items-center justify-between ">
          <div  class="space-y-2">
            <p>${serviceName}</p>
            <p>${serviceNumber}</p>            
          </div>
          <div>${new Date().toLocaleTimeString()}</div>
        </div>
  `;
  callHistoryContainer.append(newHistory);
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", function () {
    newHistory.innerHTML = "";
  });
});
console.log("Live");
