import {createTheme} from '@mui/material'

export const theme = createTheme(()=>({
    palette:{
        primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
          myowncolor:{
            secondary:"red",
            sky:"skyblue"
          }
    }
}))