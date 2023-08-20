import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const login = async (userInfo) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    const BASE_URL = "https://meyymetbaba.pythonanywhere.com/";
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      )

      dispatch(loginSuccess(data))
      navigate("/stock")
      console.log(data);
      // return data;
    } catch (error) {
      dispatch(fetchFail())
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCall;
