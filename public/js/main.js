const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");

const dataHide = document.querySelector('.middle_layer')
const temp_cal = document.getElementById("tem_in_cal");



const getInfo = async (e)=>{
    e.preventDefault();
    let cityVal = cityName.value;


    if(cityVal === "")
    {
        city_name.innerText = `Please write the City name before Search`;
        dataHide.classList.add("data_hide");
    }

    else
    {
        try
        {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3738e36da44bc4eafacb271f0af85027`;
        const response =  await fetch(url);  
        const data = await response.json();
        const arrData = [data];

        // temp_status.innerText = arrData[0].weather[0].main;

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_cal.innerText = arrData[0].main.temp;
        
        const tempMood = arrData[0].weather[0].main;

        // CONDITION TO CHECK SUNNY OR CLOUDY 
        if (tempMood == "Clear"){
            temp_status.innerHTML = "<i class='fas fa-sun' style = 'color : #eccc68; '></i>";
        }
        else if (tempMood == "Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color : #f1f2f6; '></i>";
        }
        else if (tempMood == "Rain"){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color : #a4b0be; '></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fas fa-sun' style = 'color : #eccc68; '></i>";
        }
        dataHide.classList.remove("data_hide");
         }
        catch
        {
        city_name.innerText = `please enter the city name properly`;

        dataHide.classList.add("data_hide");
       }
    
}

}     
submitBtn.addEventListener("click", getInfo);

