const API_KEY = "2430ea20df12f5f2bcaeab0f3305411d"

export async function getWitquiz() {

    // Fetch all 250 countries from the API
    let country_data = await fetch("https://restcountries.com/v3.1/all?fields=flags,name,capital,capitalInfo");
    let country_json = await country_data.json();

    // Select a random batch of 10 countries
    let witquizzes = [];
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * country_json.length);
        let country = country_json[randomIndex];
        let latitude = country.capitalInfo.latlng[0];
        let longitude = country.capitalInfo.latlng[1];
        let temp_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`);
        let temp_json = await temp_data.json();
        witquizzes.push({
            commonName: country.name.common,
            officialName: country.name.official,
            capital: country.capital[0],
            flag: country.flags.svg,
            temperature: temp_json.main.temp,
        });
    }

    return witquizzes;
}
