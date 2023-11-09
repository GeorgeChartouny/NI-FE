import React, {  useState } from "react";
import { getAggData } from "../../api/aggregateDataApi";
import styles from "./menu.styles";

export const Menu = () => {
  const [NeRadio, setNeRadio] = useState<string>("");
  const [aggregatedTime, setAggregatedTime] = useState<string>("");
  const [datetime_value, setDatetime_value] = useState<string>("2020-03-12 00:15:00");
  const [aggResult, setAggResult] = useState<object>();
  // const data = {NeRadio,aggregatedTime,datetime_value};

  const sendRequest = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        console.log("send")
        // setDatetime_value("2020-03-12 00:15:00");
      if (NeRadio && aggregatedTime && datetime_value) {
        console.log("if done")
        const result = await getAggData({
          neRequested: NeRadio,
          aggTime: aggregatedTime,
          datetime_key: datetime_value,
        });
        setAggResult(result);
        console.log("aggResult", aggResult);
      }else {
        console.log("else")
      }
    } catch (error: any) {
      console.log("Error getting data: " + error.message);
    }
  };

 return (
  <>

    <form onSubmit={sendRequest}>
      <label>
        <input
          type='radio'
          value="ne_type"
          name="neRequested"
          onChange={(e) => setNeRadio(e.target.value)}
        />
        Ne_Type
      </label>
      <label>
        <input
          type='radio'
          value="ne_alias"
          name="neRequested"
          onChange={(e) => setNeRadio(e.target.value)}
        />
        Ne_Radio
      </label>
 
    <div>
      <label>
        <input
          type='radio'
          value="TRANS_MW_AGG_SLOT_HOURLY"
          name="aggTime"
          onChange={(e) => setAggregatedTime(e.target.value)}
        />
        Hourly
      </label>
      <label>
        <input
          type='radio'
          value="TRANS_MW_AGG_SLOT_DAILY"
          name="aggTime"
          onChange={(e) => setAggregatedTime(e.target.value)}
        />
        Daily
      </label>
    </div>
    <button type="submit" >Send</button>
    </form>
  </>
);

};
