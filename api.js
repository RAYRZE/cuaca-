import { display } from "./dom";
import { displayBackground } from "./wheter";
import { cuaca } from "./main";
export async function Cuaca() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless",
  );
  const data = await response.json();
  let suhu = data.hourly.temperature_2m[0];
  let timezone = data.timezone;
  let latitude = data.latitude;
  display(suhu, timezone, latitude);
  displayBackground(suhu);
  console.log(data);
}