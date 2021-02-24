import React from "react";

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){ // if we're in summer months, return summer. Otherwise, return winter
        return lat > 0 ? 'summer' : 'winter'; // northern or southern hemisphere
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season);
  return <div>{props.lat}</div>;
};

export default SeasonDisplay;
