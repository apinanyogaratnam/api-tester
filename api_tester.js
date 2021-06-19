import axios from "axios";

const url = "https://raw.githubusercontent.com/apinanyogaratnam/Computer-Science-Languages-API/main/data.json";

const fetchData = () => {
    return axios.get(url)
          .then((response) => console.log(response.data));}


fetchData()