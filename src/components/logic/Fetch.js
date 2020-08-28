import axios from "axios";

const Fetch = async ({ location }) => {
  const apiKey = "d15bb117e41e31696ae5988087d4fb48";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;
  const request = axios.get(url);
  const response = await request;
  return response.data;
};

export default Fetch;
