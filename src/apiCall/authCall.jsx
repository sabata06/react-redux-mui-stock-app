import axios from "axios";

export const login = async (userInfo) =>{

const BASE_URL = "https://meyymetbaba.pythonanywhere.com/"

    try {
       const {data} = await axios.post(`${BASE_URL}account/auth/login`, userInfo)
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
    
}