import { useState } from "react";
import { parse } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./DTPicker.styles";

export const DTPicker = () => {
  const defaultDateTime: string = "2022-04-01 00:00:00";

  const [value, setValue] = useState<Date | null>(
    parse(defaultDateTime, "yyyy-MM-dd HH:mm:ss", new Date())
  );

  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
            <DateTimePicker
              label="Pick a Date/Time"
              value={value}
              onChange={(newValue: any) => setValue(newValue)}
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
