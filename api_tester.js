import axios from "axios";

const url = "https://raw.githubusercontent.com/apinanyogaratnam/Computer-Science-Languages-API/main/data.json";

const fetchData = async () => {
    const response = await axios.get(url);

    return response.data;
};

const getData = async () => {
    const data = await fetchData();
    console.log(data);
};

getData();
