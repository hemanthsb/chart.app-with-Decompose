import axios from "axios";
import baseUrl from '../config/baseUrl';
const Chart = async () => {
  try {
    let Api = await axios.get(baseUrl);
    return Api;
  } catch (error) {
    return error;
  }
};
export default Chart;
