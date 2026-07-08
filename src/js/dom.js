export function display(gambar,negara) {
  gambar.innerHTML = `<p>${negara.suhu}°C</p>
                        <p>${negara.timezone}</p>
                        <p>latitude : ${negara.latitude}°</p>`;
}
export function displayBackground(gambar,suhu) {
  if (suhu >= 35) {
    gambar.style.backgroundColor = "#ef4444";
  } else if (suhu >= 30) {
    gambar.style.backgroundColor = "#f97316";
  } else if (suhu >= 25) {
    gambar.style.backgroundColor = "#facc15";
  } else if (suhu >= 20) {
    gambar.style.backgroundColor = "#22c55e";
  } else if (suhu >= 10) {
    gambar.style.backgroundColor = "#38bdf8";
  } else {
    gambar.style.backgroundColor = "#2563eb";
  }
}
export function displaySun(sun, suhu) {
  if (suhu >= 35) {
    sun.style.backgroundColor = "#ef4444";
  } else if (suhu >= 30) {
    sun.style.backgroundColor = "#f97316";
  } else if (suhu >= 25) {
    sun.style.backgroundColor = "#facc15";
  } else if (suhu >= 20) {
    sun.style.backgroundColor = "#22c55e";
  } else if (suhu >= 10) {
    sun.style.backgroundColor = "#38bdf8";
  } else {
    sun.style.backgroundColor = "#2563eb";
  }
}
export function displayRay(rays, suhu) {
  rays.forEach(ray => {
    if (suhu >= 35) {
      ray.style.backgroundColor = "#ef4444";
    } else if (suhu >= 30) {
      ray.style.backgroundColor = "#f97316";
    } else if (suhu >= 25) {
      ray.style.backgroundColor = "#facc15";
    } else if (suhu >= 20) {
      ray.style.backgroundColor = "#22c55e";
    } else if (suhu >= 10) {
      ray.style.backgroundColor = "#38bdf8";
    } else {
      ray.style.backgroundColor = "#2563eb";
    }
  });

}
export function displayState(gambar,loading){
  if(loading){
    gambar.textContent="loading";
  }else{
    return
  }
}
export function displayMain(gambar){
  if(gambar.textContent.length===0){
    gambar.textContent = "Please pick country"
    console.log("kosong")
  }else{
    return
  }
}