export class wheter {
  constructor(latitude,longitude){
    this.suhu = null,
    this.timezone = null,
    this.latitude = latitude,
    this.longitude = longitude,
    this.loading = false
  }
  async Cuaca() {
  try{
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&hourly=temperature_2m&models=jma_seamless`,
    );
    if(!response.ok){throw new Error (`${response.status}`);
    }
    const data = await response.json();
    this.suhu = data.hourly.temperature_2m[0];
    this.timezone = data.timezone;
    return data;
  }catch(error){
    console.log(error.message)
  }finally{
    this.loading=false;
  }

}
}