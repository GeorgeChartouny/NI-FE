
# Baby NI Frontend

A dashboard that illustrates the KPIs data such as RSL DEVIATION, RSL INPUT POWER and MAX RX LEVEL form the database, provided with a date filter from the user.

## Installation
Use the package manager [npm](https://www.npmjs.com/) to install the required packages.
```bash
npm install
```
## Usage
To start the application.
```bash
# Connect both your computer and mobile phone to the same Wi-fi network
run the following:
$ npm start

## API Reference
#### Get KPIs
Create a .env file in the root directory and add your api. Check the .env.example to get the variable name.


## API Reference

#### Get all items

```bash
###API
 POST

| EndPoint                 | Body          | Description                |
| :----------------------- | :------------ | :------------------------- |
| `api/GetData/get-data`   | `dataModel`   | **Required**.              |

dataModel:{
  "neRequested": "string",
  "time_stampFrom": "string", // not required
  "time_stampTo": "string",   // not required
  "aggTime": "string"
}
```
