import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    pallete:{
        primary:{
            main : '#262254'
        },
        secondary:{
            main: '#543884'
        },
        error:{
            main:red.a400
        }
    }
})