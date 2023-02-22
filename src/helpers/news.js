export const callWeatherAPI=async(category,country)=>{
    let response= await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=120d45ed4135455bbef33d9e6b3756b0`)
    let data=response.json()
    return data
}