import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyle";
import FirmModal from "../components/modals/FirmModal";

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
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })

  useEffect(() => {
    getStockData("firms");
  }, []);

  console.log(firms);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{ marginBottom: "1rem" }}>
        New Firm
      </Button>
      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo} />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
