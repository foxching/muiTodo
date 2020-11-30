import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, grey } from "@material-ui/core/colors";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9"
    },
    secondary: {
      main: deepOrange[400]
    },
    background: {
      default: grey[900]
    }
  }
});
