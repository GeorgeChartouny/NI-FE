import { useState,useEffect } from "react";
import { parse,format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./DTPicker.styles";
import styles from "./DTPickerComponenent.styles"
import { DTPickerInterface } from "../../types/types";






export const DTPicker: React.FC<DTPickerInterface> = ({onDateSelect,nullDates,label}) => {
    const defaultDateTime = "2020-03-11 00:00:00";

    const [dateValue, setDateValue] = useState<Date | null>(
      parse(defaultDateTime, "yyyy-MM-dd HH:mm:ss", new Date())
    );

    const handleDateChange = (newDate:Date | null) => {
        try {
        if(newDate){
            const dateFormatted = format(newDate,"yyyy-MM-dd HH:mm:ss")
        
            onDateSelect(dateFormatted);

        }else {
            onDateSelect(newDate);
        }
        setDateValue(newDate);
        }catch(e){
console.log('e', e)
        }
    }

    useEffect(()=>{
      
      if(nullDates === true){
        handleDateChange(null);
      }
    },[nullDates]);
  
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
            <DateTimePicker
              label={label}
            //   value={value}
              value={dateValue}
              onChange={handleDateChange}
              sx={{
                color: "orange",
              }}
            />
          </DemoContainer>
          {/* <styles.PButton onClick={()=> handleDateChange(null)}>-</styles.PButton> */}
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
};
