//lay thong tin tu nguoi dung local Storage
const riderDetails = JSON.parse(localStorage.getItem("riderDetails"));

if (riderDetails) {
  const rider = document.getElementById("riderDetails");
  let backgroundClass = "rider-hero__background-team-colour";
  if (riderDetails.teamName === "Gresini Racing MotoGP") {
    backgroundClass += " gresini";
  } else if (riderDetails.teamName === "Ducati Lenovo Team") {
    backgroundClass += " ducati";
  } else if (riderDetails.teamName === "Red Bull KTM Factory Racing") {
    backgroundClass += " red-bull";
  } else if (riderDetails.teamName === "Pertamina Enduro VR46 Racing Team") {
    backgroundClass += " pertamina";
  } else if (riderDetails.teamName === "Monster Energy Yamaha MotoGP Team") {
    backgroundClass += " monster";
  } else if (riderDetails.teamName === "Trackhouse Racing") {
    backgroundClass += " trackhouse";
  } else if (riderDetails.teamName === "CASTROL Honda LCR") {
    backgroundClass += " castrol";
  } else if (riderDetails.teamName === "IDEMITSU Honda LCR") {
    backgroundClass += " idemitsu";
  } else if (riderDetails.teamName === "HRC Test Team") {
    backgroundClass += " hrc";
  } else if (riderDetails.teamName === "Prima Pramac Racing") {
    backgroundClass += " prima";
  } else if (riderDetails.teamName === "Aprilia Racing") {
    backgroundClass += " aprilia";
  } else if (riderDetails.teamName === "MT Helmets - MSI") {
    backgroundClass += " mt";
  } else if (riderDetails.teamName === "Honda Team Asia") {
    backgroundClass += " honda";
  } else if (riderDetails.teamName === "Dynavolt Intact GP MotoE") {
    backgroundClass += " dynavolt";
  } else if (riderDetails.teamName === "CFMOTO Aspar Team") {
    backgroundClass += " cfmoto";
  } else if (riderDetails.teamName === "BOE Motorsports") {
    backgroundClass += " boe";
  } else if (riderDetails.teamName === "Aruba Cloud MotoE Racing Team") {
    backgroundClass += " aruba";
  } else if (riderDetails.teamName === "LCR Honda") {
    backgroundClass += " lcr";
  } else if (riderDetails.teamName === "Red Bull GASGAS Tech3") {
    backgroundClass += " gasgas";
  } else if (riderDetails.teamName === "Repsol Honda Team") {
    backgroundClass += " repsol";
  } else if (riderDetails.teamName === "ELF Marc VDS Racing Team") {
    backgroundClass += " elf";
  } else if (riderDetails.teamName === "Fantic Racing") {
    backgroundClass += " fantic";
  } else if (riderDetails.teamName === "Italtrans Racing Team") {
    backgroundClass += " italtrans";
  } else if (riderDetails.teamName === "KLINT Forward Factory Team") {
    backgroundClass += " klint";
  } else if (riderDetails.teamName === "Liqui Moly Husqvarna Intact GP") {
    backgroundClass += " liqui";
  } else if (riderDetails.teamName === "OnlyFans American Racing Team") {
    backgroundClass += " onlyfans";
  } else if (riderDetails.teamName === "Preicanos Racing Team") {
    backgroundClass += " preicanos";
  } else if (riderDetails.teamName === "QJMOTOR Gresini Moto2™") {
    backgroundClass += " qjmotor";
  } else if (riderDetails.teamName === "Red Bull KTM Ajo") {
    backgroundClass += " red-bull";
  } else if (riderDetails.teamName === "RW Racing GP") {
    backgroundClass += " rw";
  } else if (riderDetails.teamName === "SpeedUp Racing") {
    backgroundClass += " speed";
  } else if (riderDetails.teamName === "Yamaha VR46 Master Camp Team") {
    backgroundClass += " yamaha";
  } else if (riderDetails.teamName === "CIP Green Power") {
    backgroundClass += " cip";
  } else if (riderDetails.teamName === "Kopron Rivacold Snipers Team") {
    backgroundClass += " kopron";
  } else if (riderDetails.teamName === "Leopard Racing") {
    backgroundClass += " leopard";
  } else if (riderDetails.teamName === "Liqui Moly Husqvarna Intact GP") {
    backgroundClass += " liqui";
  } else if (riderDetails.teamName === "MLav Racing") {
    backgroundClass += " mlav";
  } else if (riderDetails.teamName === "MTA Team") {
    backgroundClass += " mta";
  } else if (riderDetails.teamName === "SIC58 Squadra Corse") {
    backgroundClass += " sic58";
  } else if (riderDetails.teamName === "Axxis-MSI") {
    backgroundClass += " axxis";
  } else if (riderDetails.teamName === "Felo Gresini MotoE") {
    backgroundClass += " felo";
  } else if (riderDetails.teamName === "LCR E-Team") {
    backgroundClass += " lcr-e";
  } else if (riderDetails.teamName === "Ongetta SIC58 Squadra Corse") {
    backgroundClass += " ongetta";
  } else if (riderDetails.teamName === "Openbank Aspar Team") {
    backgroundClass += " openBank";
  } else if (riderDetails.teamName === "Tech3 E-Racing") {
    backgroundClass += " tech3";
  }

  document.getElementById("riderDetails").innerHTML = `
  <div class="rider-hero">
    <div class="rider-hero__container">
      <a class="rider-hero__back-button">
        <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>        
        ALL RIDERS
      </a>

      <div class="rider-hero__background">
        <div class="${backgroundClass}"></div>
        <div class="rider-hero__background-info">
          <div class="rider-hero__background-initials">
          ${riderDetails.backgroundName}
          </div>
          <div class="rider-hero__background-name">
          ${riderDetails.lastName}</div>
        </div>

        <div class="rider-hero__background-gradient"></div>

        <div class="rider-hero__background-image">
          <div class="rider-image-container">
            <div class="rider-image">
              <div class="u-observed lazy-image-wrapper">
                <picture class="picture">
                  <img class="img undefined picture__img" src="${riderDetails.riderImg}"/>
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
