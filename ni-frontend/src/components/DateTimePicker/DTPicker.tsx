import { useState } from "react";
import { parse,format } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./DTPicker.styles";




interface DTPickerInterface {
    onDateSelect: (date:string| null) => void;   
   }

export const DTPicker: React.FC<DTPickerInterface> = ({onDateSelect}) => {
    const defaultDateTime = "2020-03-11 00:00:00";

    const [dateValue, setDateValue] = useState<Date | null>(
      parse(defaultDateTime, "yyyy-MM-dd HH:mm:ss", new Date())
    );

    const handleDateChange = (newDate:Date | null) => {
        if(newDate){
            const dateFormatted = format(newDate,"yyyy-MM-dd HH:mm:ss")
            setDateValue(newDate);
            onDateSelect(dateFormatted);
        }
    }
  
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
            <DateTimePicker
              label="Pick a Date/Time"
            //   value={value}
              value={dateValue}
              onChange={handleDateChange}
              sx={{
                color: "orange",
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
};
