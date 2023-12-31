import React, { ChangeEvent, useState } from "react";
import styles from "./menu.styles";
import global from "../../globalStyles/global";
import { useDispatch } from "react-redux";
import { fetchAggData } from "../../redux/AggDataCall";
import { DTPicker } from "../DateTimePicker/DTPicker";

import Notification from "../Notification/Notification";

export const Menu: React.FC = () => {
  const [NeRadio, setNeRadio] = useState<string>("");
  const [aggregatedTime, setAggregatedTime] = useState<string>("TRANS_MW_AGG_SLOT_DAILY");
  const [fromDateTime, setFromDateTime] = useState<string | null>(
    "2020-03-11 00:00:00"
  );
  const [toDateTime,setToDateTime] = useState<string|null>(
    "2020-03-11 00:00:00"
  );

  const dispatch = useDispatch();
  const [ notify, setNotify] = useState({isOpen:false , message:'', type:''})
  const [dateNull,setDateNull] = useState<boolean>(false);

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // console.log("send");
      if (NeRadio && aggregatedTime) {
        // console.log("if done");

        fetchAggData(dispatch, {
          neRequested: NeRadio,
          aggTime: aggregatedTime,
          time_stampFrom: fromDateTime,
          time_stampTo: toDateTime
        });
      
      } else {
        //alert("Both radio buttons are required to get the data.");
   
        setNotify({
          isOpen:true,
          message:'You need choose between NeType and NeAlias.',
          type:'info'
        })
        
      }
    } catch (error: any) {
      console.log("Error getting data: " + error.message);
    }
  };


  //callbackFunction to get the date from the child component DTPicker
  const handleFromDateChange = (selectedDate: string | null) => {
    try {
      if (selectedDate == null) {
        setFromDateTime(null);
      } else {
        setFromDateTime(selectedDate);
        setDateNull(false);
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const handleToDateChange = (selectedDate: string | null) => {
    try {
      if (selectedDate == null) {
        setToDateTime(null);
      } else {
        setToDateTime(selectedDate);
        setDateNull(false);

      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const emptyDates = () => {
setDateNull(true)
  }



  const [checked, setChecked] = useState(false); // store value

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setChecked(e.target.checked)
if(checked){
  setAggregatedTime("TRANS_MW_AGG_SLOT_DAILY")
}else {
  setAggregatedTime("TRANS_MW_AGG_SLOT_HOURLY");
}
  } 

  

  return (
    <styles.Container>
      <styles.Title>Dashboard</styles.Title>
      <styles.Form onSubmit={sendRequest}>
        <DTPicker onDateSelect={handleFromDateChange} label = "Starting Date/Time" nullDates={dateNull}/>
        <DTPicker onDateSelect={handleToDateChange} label ="Ending Date/Time" nullDates = {dateNull} />
        <styles.PButton onClick={()=> emptyDates()}>-</styles.PButton>

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
          {/* <styles.Label>
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
          </styles.Label> */}

          
<styles.LabelToggle>
      <styles.SpanLabel>  {checked ? '' : 'Daily'}</styles.SpanLabel>
      <styles.Input checked={checked} type="checkbox" onChange={handleChange} />

      <styles.Switch />
      <styles.SpanLabel> {checked ? 'Hourly' : ''}</styles.SpanLabel>
    </styles.LabelToggle>
        </styles.LabelContainer>

        <global.SubmitButton type="submit">Submit</global.SubmitButton>
      </styles.Form>
      {notify.type &&(

        <Notification
        notify={notify}
        setNotify={setNotify}/>
        ) }
           
    </styles.Container>
  );
};
