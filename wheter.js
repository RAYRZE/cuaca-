import { Cuaca } from "./api";
import { cuaca } from "./main";
export function displayBackground(suhu) {
  if (suhu >= 30) {
    cuaca.style.backgroundColor = "red";
  } else if (suhu >= 20) {
    cuaca.style.backgroundColor = "orange";
  } else {
    cuaca.style.backgroundColor = "skyblue";
  }
}