import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
  const { token } = useSelector((state) => state.auth)

  const axiosPublic = axios.create({
    baseURL: "https://meyymetbaba.pythonanywhere.com/",
  })

  const axiosWithToken = axios.create({
    baseURL: "https://meyymetbaba.pythonanywhere.com/",
    headers: { Authorization: `Token ${token}` },
  })

  return { axiosWithToken, axiosPublic }
}

export default useAxios
