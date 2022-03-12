import React from 'react';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
 root : {
     margin : 'auto',
     color : 'indigo'
 }
})
export default function Title(){
    const classes = useStyles()
    return(        

<div>

<Typography
    className = {classes.root}
    variant = 'h4'
    gutterBottom
    color= 'primary'
    align = 'center'
    >
FUND RAISING
    </Typography>

</div>

)
}