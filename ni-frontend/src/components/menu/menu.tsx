import React, { useEffect, useState } from "react";
import styles from "./menu.styles";
import global from "../../globalStyles/global";
import { useDispatch } from "react-redux";
import { fetchAggData } from "../../redux/AggDataCall";
import { DTPicker } from "../DateTimePicker/DTPicker";
import { parse, format } from "date-fns";

export const Menu: React.FC = () => {
  const [NeRadio, setNeRadio] = useState<string>("");
  const [aggregatedTime, setAggregatedTime] = useState<string>("");
  const [datetime_value, setDatetime_value] = useState<string | null>(
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
          time_stamp: datetime_value,
        });
      } else {
        console.log("else");
      }
    } catch (error: any) {
      console.log("Error getting data: " + error.message);
    }
  };

  const handleClick = () => {
    setValue(!value);
  };

  //callbackFunction to get the date from the child component DTPicker
  const handleDateChange = (selectedDate: string | null) => {
    console.log("selectedDate", selectedDate);
    try {
      if (selectedDate == null) {
        setDatetime_value(null);
      } else {
        setDatetime_value(selectedDate);
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
        <DTPicker onDateSelect={handleDateChange} />
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
