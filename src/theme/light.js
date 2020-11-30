import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey, indigo } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: indigo[200]
    },
    secondary: {
      main: blue[400]
    },
    background: {
      default: grey[100]
    }
  }
});
