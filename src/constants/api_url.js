

const location = "Buenos Aires,ar"
const api_key = "d123f8be74c0dba159dcb76c29c8b93d"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`