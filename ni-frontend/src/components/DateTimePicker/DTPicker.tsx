import {useState} from 'react'
import {parse} from "date-fns"

export const DTPicker = () => {
    const defaultDateTime : string = "2022-04-01 00:00:00";

const [value,setValue] = useState<Date | null>(parse(defaultDateTime, 'yyyy-MM-dd HH:mm:ss', new Date()));

  return (
    
  )
}
