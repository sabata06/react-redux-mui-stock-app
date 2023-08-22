import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const {axiosWithToken} = useAxios()


  const getStockData = async (url) => {
    // const BASE_URL = "https://meyymetbaba.pythonanywhere.com/";
    dispatch(fetchStart());

    try {
        //? axios instance den önceki hali
    //   const { data } = await axios.get(`${BASE_URL}stock/${url}/`, {
    //     headers: { Authorization: `Token ${token}` },
    //   });

const {data} = await axiosWithToken(`stock/${url}`)

      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    // const BASE_URL = "https://meyymetbaba.pythonanywhere.com/";
    dispatch(fetchStart());

    try {
      await axiosWithToken.delete(`stock/${url}/${id}`, {
        // headers: { Authorization: `Token ${token}` },
      });

      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
