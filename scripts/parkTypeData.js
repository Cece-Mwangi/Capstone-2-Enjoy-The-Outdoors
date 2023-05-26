const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

const parkType = document.getElementById("typeSelector");

parkTypesArray.forEach((type) => {
  const optionSel = new Option(type, type);
  parkType.appendChild(optionSel);
});
