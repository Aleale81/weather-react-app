import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {

    function handleResponce(responce) {
        alert(`The temperature in ${props.city} is ${Math.round(responce.data.main.temp)}°C`)
    }

let apiKey = `a1bed3af7d71b323ab4af9036fcd943d`
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponce);

    return (
        <div className="Weather">
            <h2>Hello from {props.city}</h2>
             <Loader
        type="BallTriangle"
        color= "red"
        height={100}
        width={100}
        timeout={3000} 
      />
        </div>);
}