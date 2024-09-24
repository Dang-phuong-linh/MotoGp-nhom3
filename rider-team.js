document.addEventListener("DOMContentLoaded", function () {
  const riders = [
    {
      riderTitle: "Official",
      backgroundName: "FB1",
      riderImg:
        "https://resources.motogp.pulselive.com/photo-resources/2024/02/19/3a568eee-1e12-4091-b120-f53c71cbe8f6/rider-bio_francescobagnaia.png?height=400&width=600",
      riderHashtag: "#FB1",
      firstName: "Francesco",
      lastName: "Bagnaia",
      flagImg: "https://static-files.motogp.pulselive.com/assets/flags/it.svg",
      countryName: "Italy",
      teamName: "Ducati Lenovo Team",
    },
  ];

  const riderList = document.getElementById("riderList");
  riderList.innerHTML = ""; //xoa noi dung

  riders.forEach((rider) => {
    const divTitle = document.createElement("div");
    divTitle.textContent = rider.riderTitle;
    divTitle.classList.add("rider-list__career-type", "rider-grid__title");
    riderList.appendChild(divTitle);

    const link = document.createElement("a");
    link.className = "rider-list__rider";
    const backgroundClass2 = document.createElement("div");
    backgroundClass2.className = "rider-list__background-team-colour";
    let backgroundClass = "rider-list__background-team-colour";

    if (rider.teamName === "Gresini Racing MotoGP") {
      backgroundClass += " gresini";
    } else if (rider.teamName === "Ducati Lenovo Team") {
      backgroundClass += " ducati";
    } else if (rider.teamName === "Red Bull KTM Factory Racing") {
      backgroundClass += " red-bull";
    } else if (rider.teamName === "Pertamina Enduro VR46 Racing Team") {
      backgroundClass += " pertamina";
    } else if (rider.teamName === "Monster Energy Yamaha MotoGP Team") {
      backgroundClass += " monster";
    } else if (rider.teamName === "Trackhouse Racing") {
      backgroundClass += " trackhouse";
    } else if (rider.teamName === "CASTROL Honda LCR") {
      backgroundClass += " castrol";
    } else if (rider.teamName === "IDEMITSU Honda LCR") {
      backgroundClass += " idemitsu";
    } else if (rider.teamName === "HRC Test Team") {
      backgroundClass += " hrc";
    } else if (rider.teamName === "Prima Pramac Racing") {
      backgroundClass += " prima";
    } else if (rider.teamName === "Aprilia Racing") {
      backgroundClass += " aprilia";
    }

    link.innerHTML = `
    <div class="rider-list__background">
      <div class="${backgroundClass}"></div>
      <div class="rider-list__background-name">${rider.backgroundName}</div>
      <div class="rider-list__background-gradient"></div>
    </div>

    <div class="rider-list__image-container">
      <div class="rider-list__image">
        <div class="rider-image-container">
          <div class="rider-image">
            <div class="u-observed lazy-image-wrapper">
              <picture class=" object-fit-cover-picture">
                <img class="img undefined picture__img object-fit-cover-picture__img" src="${rider.riderImg}" alt="${rider.lastName}"/>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rider-list__info-container">
      <span class="rider-list__info-hashtag">${rider.riderHashtag}</span>
      <div class="rider-list__info-name">
       <span>${rider.firstName}</span>
       <span>${rider.lastName}</span>
      </div>

      <div class="rider-list__details-container">
        <span class="rider-list__details-country">
          <div class="rider-list__flag-container">
            <img class="rider-list__details-flag" src="${rider.flagImg}"/>
          </div>
          ${rider.countryName}
        </span>
        <span class="rider-list__details-team">
        ${rider.teamName}
        </span>
      </div>
    </div>
    `;

    riderList.appendChild(link);
  });
});
