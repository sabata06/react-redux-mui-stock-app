import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";


// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

const Firms = () => {


  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  //?Jenerik fonksiyon yapmadan önceki hali
  // const getFirms = async () => {
  //   const BASE_URL = "https://meyymetbaba.pythonanywhere.com/";
  //   dispatch(fetchStart());
  //   const url = "firms"
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     dispatch(getSuccess({data, url}));

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //   }
  // };
const {getStockData} = useStockCall()

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>
    </div>
  );
};

export default Firms;
