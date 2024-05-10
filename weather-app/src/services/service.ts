import axios from 'axios'

const baseURL =
  'https://api.openweathermap.org/data/2.5/weather?appid=e3b787e83e7b983adeca31847414a20e&q='

 function getWeather() {
  return  axios
    .get(baseURL + 'lyon')
    .then((res) => {
        
      console.log(res.data)
      return res.data //recupere data directement
    })
    .catch((err) => {
      console.error(err)
      throw err
    })
}

export function useWeather() {
  return { getWeather } //pour recuperer les methodes
}
