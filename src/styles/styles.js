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
    color: "#F9F9F9",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
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
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#F9F9F9",
  },
  title: {
    textAlign: "center",
    fontSize: "0.9rem",
    fontWeight: 600,
    margin: "40px 0",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  card: {
    height: "80px",
    width: "100%",
    boxShadow: "none",
  },
  media: {
    height: "70px",
    width: "auto",
    marginLeft: "10px",
  },
  content: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  list: {
    overflow: "auto",
  },
  largeButton: {
    width: "80%",
    margin: "10px auto",
    background: "linear-gradient(to right, #F5C108, #FFD642)",
    borderRadius: "15px",
    padding: "15px 0",
    color: "black",
  },
  largeInput: {
    width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
  },
  cancel: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: "35px",
    marginLeft: "20px",
    minWidth: "40px",
    maxWidth: "40px",
    backgroundColor: "#FCF9F1",
    textAlign: "center",
    borderRadius: "10px",
  },
  arrowIcon: {
    width: "15px",
    textAlign: "center",
  },

  bordered: {
    borderTop: "2px solid black",
    margin: 5,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  space: {
    padding: "10px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  infoOrder: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  setToRight: {
    marginLeft: "auto",
  },
  marginAuto: {
    margin: "auto",
  },
}));
