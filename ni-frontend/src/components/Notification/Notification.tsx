import { Alert, Snackbar } from "@mui/material";
import React from "react"; 


export default function Notification(props:any){
    const {notify,setNotify} = props;

    const handleClose = (event?:any,reason?:any) => {
        if(reason === 'clickaway'){
            return ;
        }
        setNotify({
            ...notify,
            isOpen:false
        })
    }

return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={handleClose}
    >
        <Alert
        variant="standard"
        severity={notify.type}
        onClose={handleClose}
        >{notify.message}</Alert>
    </Snackbar>
)

}
