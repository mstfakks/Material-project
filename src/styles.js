import { makeStyles, withStyles } from "@material-ui/core/styles";

/*makeStyle içerisine css gibi değerler verilebilir.*/
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.default,
    padding: "50px 0px",
  },
}));
export default useStyles;
