import { Cuaca } from "./api";
import { cuaca } from "./main";
export function display(suhu, timezone, latitude) {
  cuaca.innerHTML = `<p>${suhu}°C</p>
                        <p>${timezone}</p>
                        <p>latitude : ${latitude}°</p>`;
}
