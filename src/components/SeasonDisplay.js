import React from "react";

const seasonConfig = { // design pattern to create this config object for each component you create. Simplifies code
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's chilly",
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // if we're in summer months, return summer. Otherwise, return winter
    return lat > 0 ? "summer" : "winter"; // northern or southern hemisphere
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
