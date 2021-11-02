import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  yellow: {
    background: "radial-gradient(circle, #FFD739 10%, #FFCC00 99%)",
    color: "#ffffff",
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  largeLogo: {
    height: 60,
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    filter: "grayscale(1) brightness(10)",
  },
  order: {
    backgroundColor: "#37332A",
    borderRadius: "15px",
    padding: "15px",
    width: "80%",
    marginBottom: "25px",
    // marginTop: "35px",
    fontWeight: "bold",
  },
  greyText: {
    color: "#37332A",
    // marginTop: "20px",
    marginBottom: "1.2rem",
  },
  homepageImage: {
    height: "auto",
    width: "105%",
    marginRight: "20px",
    marginTop: "20px",
    // marginBottom: "36px",
  },
}));
