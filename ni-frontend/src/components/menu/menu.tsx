import React, { useEffect, useState } from "react";
import styles from "./menu.styles";
import global from "../../globalStyles/global";
import { useDispatch } from "react-redux";
import { fetchAggData } from "../../redux/AggDataCall";
import { DTPicker } from "../DateTimePicker/DTPicker";

export const Menu: React.FC = () => {
  const [NeRadio, setNeRadio] = useState<string>("");
  const [aggregatedTime, setAggregatedTime] = useState<string>("");
  const [fromDateTime, setFromDateTime] = useState<string | null>(
    "2020-03-11 00:00:00"
  );
  const [toDateTime,setToDateTime] = useState<string|null>(
    "2020-03-11 00:00:00"
  );

  const [value, setValue] = useState<boolean>();
  const dispatch = useDispatch();

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("send");
      if (NeRadio && aggregatedTime) {
        console.log("if done");

        fetchAggData(dispatch, {
          neRequested: NeRadio,
          aggTime: aggregatedTime,
          time_stampFrom: fromDateTime,
          time_stampTo: toDateTime
        });
      } else {
        alert("Both radio buttons are required to get the data.")
      }
    } catch (error: any) {
      console.log("Error getting data: " + error.message);
    }
  };

  const handleClick = () => {
    setValue(!value);
  };

  //callbackFunction to get the date from the child component DTPicker
  const handleFromDateChange = (selectedDate: string | null) => {
    console.log("selectedDate", selectedDate);
    try {
      if (selectedDate == null) {
        setFromDateTime(null);
      } else {
        setFromDateTime(selectedDate);
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const handleToDateChange = (selectedDate: string | null) => {
    console.log("selectedDate", selectedDate);
    try {
      if (selectedDate == null) {
        setToDateTime(null);
      } else {
        setToDateTime(selectedDate);
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // console.log('dateValue', dateValue);
  });

  return (
    <styles.Container>
      <styles.Title>Dashboard</styles.Title>
      <styles.Form onSubmit={sendRequest}>
        <DTPicker onDateSelect={handleFromDateChange} label = "Starting Date/Time"/>
        <DTPicker onDateSelect={handleToDateChange} label ="Ending Date/Time" />

        <styles.BorderBreak />
        <styles.LabelContainer>
          <styles.Label>
            <input
              type="radio"
              value="ne_type"
              name="neRequested"
              onChange={(e) => setNeRadio(e.target.value)}
            />
            NE Type
          </styles.Label>
          <styles.Label>
            <input
              type="radio"
              value="ne_alias"
              name="neRequested"
              onChange={(e) => setNeRadio(e.target.value)}
            />
            NE Alias
          </styles.Label>
          <styles.BorderBreak />
        </styles.LabelContainer>

        <styles.LabelContainer>
          <styles.Label>
            <input
              type="radio"
              value="TRANS_MW_AGG_SLOT_HOURLY"
              name="aggTime"
              onChange={(e) => setAggregatedTime(e.target.value)}
            />
            Hourly
          </styles.Label>
          <styles.Label>
            <input
              type="radio"
              value="TRANS_MW_AGG_SLOT_DAILY"
              name="aggTime"
              onChange={(e) => setAggregatedTime(e.target.value)}
            />
            Daily
          </styles.Label>

          {/* <styles.Wrapper>
            <styles.ToggleButton onClick={handleClick}>
              <styles.LeftLabel active={value}>
                <styles.AggInput
                  type="radio"
                  value="TRANS_MW_AGG_SLOT_DAILY"
                  name="aggTime"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setAggregatedTime(e.target.value)}
                />
                Daily
              </styles.LeftLabel>

              <styles.RightLabel active={value}>
                <styles.AggInput
                  type="radio"
                  value="TRANS_MW_AGG_SLOT_HOURLY"
                  name="aggTime"
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setAggregatedTime(e.target.value)}
                />
                Hourly
              </styles.RightLabel>
            </styles.ToggleButton>
          </styles.Wrapper> */}
        </styles.LabelContainer>

        <global.SubmitButton type="submit">Send</global.SubmitButton>
      </styles.Form>
    </styles.Container>
  );
};
