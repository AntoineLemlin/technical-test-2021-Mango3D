import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
  },
  yellow: {
    background: "radial-gradient(circle, #FFD739 10%, #FFCC00 99%)",
    color: "#ffffff",
  },
  greyish: {
    backgroundColor: "#F9F9F9",
  },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
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
    minHeight: "10px",
  },
  card: {
    height: "100px",
    width: "100%",
    boxShadow: "none",
  },
  mediaHamburger: {
    height: "50px!important",
    width: "auto!important",
    marginLeft: "10px!important",
  },
  content: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  },
  list: {
    overflow: "auto",
  },
  largeButton: {
    width: "80%",
    margin: "10px auto",
    background: "linear-gradient(to right, #F5C108, #FFD642)",
    borderRadius: "15px!important",
    padding: "15px 0!important",
    color: "black",
  },
  largeInput: {
    width: "30px!important",
    padding: "0!important",
    fontSize: "20px!important",
    height: "30px!important",
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
    borderTop: "2px solid lightgrey",
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
    borderRadius: "30px",
    backgroundColor: "white",
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
  marginRightAuto: {
    marginRight: "auto",
  },
  bgImage: {
    height: "300px",
  },
  viewMain: {
    marginTop: "-50px",
    backgroundColor: "#F9F9F9",
    borderRadius: "36px ",
    color: "#F9F9F9",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "42.5%",
      top: 0,
      width: "15%",
      height: "2px",
      backgroundColor: "grey",
      marginTop: "10px",
      borderRadius: "2px",
    },
  },
  viewInfo: {
    display: "inline-block",
    marginTop: "25px",
    marginLeft: "25px",
  },
  discount: {
    color: "#2CB4F3",
    fontSize: "0.8rem",
    backgroundColor: "#E8F5FD",
    borderRadius: "10px",
    padding: "10px 15px",
    width: "90px",
  },
  viewTitle: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  viewPrices: {
    display: "flex",
    gap: "60px",
    alignItems: "center ",
  },
  viewOldPrice: {
    textDecoration: "line-through",
    fontSize: "1.3rem",
  },
  viewPrice: {
    display: "flex",
    gap: "3px",
    "&::before": {
      content: '"$"',
      fontSize: "1rem",
      marginTop: "5px",
    },
  },
  viewDescription: {
    color: "black",
  },
  burgerInfoContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  burgerInfo: {
    display: "flex",
    flexDirection: "column",
    color: "black",
    marginTop: "15px",
    flex: "33%",
  },
  viewSize: {
    fontSize: "1rem",
    color: "grey",
  },
  viewSizeInfo: {
    fontSize: "1rem",
    color: "black",
  },
  quantity: {
    display: "block",
  },
  viewOrder: {
    display: "flex",
    marginTop: "50px",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-50px",
  },
  viewAddToCart: {
    display: "flex",
    width: "55%",
    backgroundColor: "#4ECF00",
    borderRadius: "15px",
    padding: "15px 0",
  },
  marginLeftAuto: {
    marginLeft: "auto",
  },
  fullWidth: {
    width: "100%",
  },
  marginRightQuantity: {
    marginRight: "105px",
  },
  marginLeftOrderButton: {
    marginLeft: "20px",
  },
  reviewIcon: {
    maxWidth: "15px",
    minWidth: "15px",
    maxHeight: "15px",
    minHeight: "15px",
  },
  alignItems: {
    alignItems: "center",
  },
  productName: {
    fontWeight: "bold",
  },
  chooseCartIcon: {
    maxWidth: "20px",
    minWidth: "20px",
    maxHeight: "20px",
    minHeight: "20px",
  },
}));
