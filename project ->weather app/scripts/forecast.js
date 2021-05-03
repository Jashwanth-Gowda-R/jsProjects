// implementing class method to weather app

class Forecast{
  constructor(){
    this.key='XGuMzIOxGf28Da2Ce4tLwlUi5yWr7Dsm'
    this.cityapi='http://dataservice.accuweather.com/locations/v1/cities/search'
    this.weatherapi='http://dataservice.accuweather.com/currentconditions/v1/'
  }
  async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityapi + query);
    const data = await response.json();

    return data[0];
  }
  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherapi + query);
    const data = await response.json();

    return data[0];
  }
}



// const key ='XGuMzIOxGf28Da2Ce4tLwlUi5yWr7Dsm';

// // get weather information
// const getWeather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
  
//     const response = await fetch(base + query);
//     const data = await response.json();
  
//     return data[0];
  
//   };
  
//   // get city information
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// };
  
