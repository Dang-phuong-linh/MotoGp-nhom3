const resultTeams = [
  {
    pos: 1,
    point: 25,
    riderImg:
      "https://resources.motogp.pulselive.com/photo-resources/2024/02/19/986b0e12-1db0-49d8-ae13-fd556286237a/93_Marc_MarquezFullbodyGresini.png?height=300&width=200",
    bikeNumber: 93,
    firstName: "M.",
    LastName: "Marquez",
    flag: "https://static-files.motogp.pulselive.com/assets/flags/es.svg",
    teamName: "Gresini Racing MotoGP",
    time: "41:52.083",
  },
];

const resultTeamList = document.getElementById("resultTeamList");

//them doi vao bang
resultTeams.forEach((team) => {
  const row = document.createElement("tr");
  row.className = "results-table__body-row";

  //them class tuy thuoc vao ten doi
  if (team.teamName === "Gresini Racing MotoGP") {
    row.classList.add("gresini");
  } else if (team.teamName === "Ducati Lenovo Team") {
    row.classList.add("ducati");
  } else if (team.teamName === "Red Bull KTM Factory Racing") {
    row.classList.add("red-bull");
  } else if (team.teamName === "Pertamina Enduro VR46 Racing Team") {
    row.classList.add("pertamina");
  } else if (team.teamName === "Monster Energy Yamaha MotoGP Team") {
    row.classList.add("monster");
  } else if (team.teamName === "Trackhouse Racing") {
    row.classList.add("trackhouse");
  } else if (team.teamName === "CASTROL Honda LCR") {
    row.classList.add("castrol");
  } else if (team.teamName === "IDEMITSU Honda LCR") {
    row.classList.add("idemitsu");
  } else if (team.teamName === "HRC Test Team") {
    row.classList.add("hrc");
  } else if (team.teamName === "Prima Pramac Racing") {
    row.classList.add("prima");
  } else if (team.teamName === "Aprilia Racing") {
    row.classList.add("aprilia");
  }

  const posCell = document.createElement("td");
  posCell.textContent = team.pos;
  posCell.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--pos",
    " u-hide-tablet"
  );

  const pointCell = document.createElement("td");
  pointCell.textContent = team.point;
  pointCell.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--points",
    "u-hide-tablet"
  );

  const riderCell = document.createElement("td");
  riderCell.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--rider"
  );
  const riderDetails = document.createElement("div");
  riderDetails.className = "results-table__rider-details";
  riderCell.appendChild(riderDetails);

  //hinh anh rider
  const riderImgContainer = document.createElement("div");
  riderImgContainer.className = "rider-image-container";
  riderDetails.appendChild(riderImgContainer);

  const riderImg = document.createElement("div");
  riderImg.className = "rider-image";
  riderImgContainer.appendChild(riderImg);

  const lazyImg = document.createElement("div");
  lazyImg.classList.add(" u-observed", "lazy-image-wrapper ");
  riderImg.appendChild(lazyImg);

  const imgRider = document.createElement("img");
  imgRider.src = team.riderImg;
  imgRider.alt = `${team.LastName} Image`;
  imgRider.classList.add("img", "undefined", "picture__img ");
  lazyImg.appendChild(imgRider);

  //ten, so hieu
  riderNameWrapper = document.createElement("div");
  riderNameWrapper.classList.add(
    "results-table__rider-name-wrapper",
    "u-hide-tablet"
  );
  riderDetails.appendChild(riderNameWrapper);

  riderName = document.createElement("div");
  riderName.classList.add("results-table__rider-name");
  riderNameWrapper.appendChild(riderName);

  const bikeNumber = document.createElement("span");
  bikeNumber.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--number"
  );
  bikeNumber.textContent = team.bikeNumber;
  riderName.appendChild(bikeNumber);

  const fullName = document.createElement("span");
  fullName.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--full-name"
  );
  riderName.appendChild(fullName);

  const riderLink = document.createElement("a");
  riderLink.classList.add("results-table__rider-link");
  fullName.appendChild(riderLink);
  riderLink.textContent = team.LastName;

  const firstName = document.createElement("span");
  firstName.className = "results-table__first-name";
  riderLink.appendChild(firstName);
  firstName.textContent = team.firstName;

  const imgFlag = document.createElement("img");
  imgFlag.className = "results-table__body-cell-flag";
  imgFlag.src = team.flag;
  riderNameWrapper.appendChild(imgFlag);

  const teamNameCell = document.createElement("td");
  teamNameCell.textContent = team.teamName;
  teamNameCell.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--team",
    "u-hide-tablet"
  );

  const timeCell = document.createElement("td");
  timeCell.textContent = team.time;
  timeCell.classList.add(
    "results-table__body-cell",
    "results-table__body-cell--time"
  );

  row.appendChild(posCell);
  row.appendChild(pointCell);
  row.appendChild(riderCell);
  row.appendChild(teamNameCell);
  row.appendChild(timeCell);
  resultTeamList.appendChild(row);
});
