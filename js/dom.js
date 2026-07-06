export function display(gambar,negara) {
  gambar.innerHTML = `<p>${negara.suhu}°C</p>
                        <p>${negara.timezone}</p>
                        <p>latitude : ${negara.latitude}°</p>`;
}
export function displayBackground(gambar,suhu) {
  if (suhu >= 30) {
    gambar.style.backgroundColor = "red";
  } else if (suhu >= 20) {
    gambar.style.backgroundColor = "orange";
  } else {
    gambar.style.backgroundColor = "skyblue";
  }
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