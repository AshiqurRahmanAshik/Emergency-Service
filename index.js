const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (e) {
  //  Heart functionality
  const heartBtn = e.target.className.includes("fa-heart");
  if (heartBtn) {
    const totalHeart = document.getElementById("total-heart").innerText;
    const updatedHeart = Number(totalHeart) + 1;
    document.getElementById("total-heart").innerText = updatedHeart;
  }

  //  Call button functionality
  const callBtn = e.target.closest(".call-btn");
  if (callBtn) {
    const serviceName =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;

    const totalCoin = document.getElementById("total-coin").innerText;
    const totalCoinNumber = Number(totalCoin);
    const NetCoinNumber = totalCoinNumber - 20;
    if (totalCoinNumber < 20) {
      alert(
        `❌ You don't have sufficient coin. You need at least 20 coins to call`
      );
      return;
    }

    document.getElementById("total-coin").innerText = NetCoinNumber;
    alert(`📞Calling ${serviceName} ${serviceNumber}`);

    //  Call history append
    const callHistoryContainer = document.getElementById(
      "call-history-container"
    );
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="space-y-2 my-2">
          <p class="font-bold">${serviceName}</p>
          <p class="roboto">${serviceNumber}</p>
        </div>
        <div class="text-sm text-gray-700">${new Date().toLocaleTimeString()}</div>
      </div>
    `;
    callHistoryContainer.append(newHistory);

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function () {
      newHistory.innerHTML = "";
    });
  }

  //  Copy button functionality
  const copyBtn = e.target.closest(".copy-btn");
  if (copyBtn) {
    const copyServiceName =
      copyBtn.parentNode.parentNode.children[1].children[1].innerText;
    const copyServiceNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    alert(
      `${copyServiceName} Number has been copied & the number is ${copyServiceNumber}`
    );
    navigator.clipboard.writeText(copyServiceNumber);

    const totalCopy = document.getElementById("total-copy").innerText;
    const updatedCopy = Number(totalCopy) + 1;
    document.getElementById("total-copy").innerText = updatedCopy;
  }
});
