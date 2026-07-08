import { wheter } from "./wheter";
import { display, displayBackground, displayState, displayMain,displaySun,displayRay } from "./dom";
import { kota } from "./dataCountry";
const gambar = document.getElementById("main");
let select = document.getElementById("countrySelect")
const matahari = document.getElementById("matahari")
const ray = document.querySelectorAll(".ray")
displayMain(gambar);
async function fungsiCuaca(latitude,longitude) {
  const negara = new wheter(latitude,longitude);
  displayState(gambar, true)
  await negara.Cuaca();
  displayRay(ray,negara.suhu)
  displaySun(matahari,negara.suhu)
  display(gambar,negara);
  displayBackground(gambar,negara.suhu);
  displayState(gambar,negara.loading)
}
function mainChange(){
  let cities = Object.entries(kota).map(([key, { lat, lon }]) => ({
    value: key,
    name: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
    action: () => fungsiCuaca(lat, lon),
  }));
  cities.forEach(city => {
    let opt = document.createElement("option");
    opt.value = city.value;
    opt.textContent = city.name;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    const matchedCity = cities.find(c => c.value === selectedValue);
    if (matchedCity) matchedCity.action();
  });
};
mainChange();
