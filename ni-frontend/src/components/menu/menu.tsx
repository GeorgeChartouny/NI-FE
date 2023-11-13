import React, { useEffect, useState } from "react";
import { getAggData } from "../../api/aggregateDataApi";
import styles from "./menu.styles";
import global from "../../globalStyles/global";
import {useDispatch} from "react-redux"
import { fetchAggData } from "../../redux/AggDataCall";

export const Menu = () => {
  const [NeRadio, setNeRadio] = useState<string>("");
  const [aggregatedTime, setAggregatedTime] = useState<string>("");
  const [datetime_value, setDatetime_value] = useState<string>(
    "2020-03-12 00:15:00"
  );

  const [value, setValue] = useState<boolean>();
  const [aggResult, setAggResult] = useState<object>();
  const dispatch = useDispatch();
  

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("send");
      // setDatetime_value("2020-03-12 00:15:00");
      if (NeRadio && aggregatedTime && datetime_value) {
        console.log("if done");
        // const result = await getAggData({
        //   neRequested: NeRadio,
        //   aggTime: aggregatedTime,
        //   datetime_key: datetime_value,
        // });
        // setAggResult(result);
        // console.log("aggResult", aggResult);

      fetchAggData(dispatch,{neRequested:NeRadio,aggTime:aggregatedTime,datetime_key:datetime_value});
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

  useEffect(() => {
    console.log("aggregatedTime", aggregatedTime);
  }, []);

  return (
    <styles.Container>
      <styles.Title>Dashboard</styles.Title>
      <styles.Form onSubmit={sendRequest}>
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
