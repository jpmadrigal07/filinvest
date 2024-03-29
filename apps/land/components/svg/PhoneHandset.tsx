import React from "react";

const PhoneHandset = ({
  color = "#9b9b9b",
  classes,
}: {
  color?: string;
  classes?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.478"
      height="21.001"
      viewBox="0 0 21.478 21.001"
      className={classes}
    >
      <path
        id="phone-handset-line"
        d="M17.223,22.153a2.864,2.864,0,0,1-.607-.067A20.575,20.575,0,0,1,6.532,16.777a19.847,19.847,0,0,1-5.461-9.86,2.779,2.779,0,0,1,.819-2.6L4.318,1.985a1.186,1.186,0,0,1,1.814.2L9.166,6.669A.971.971,0,0,1,9.1,7.822L7.576,9.642a11.492,11.492,0,0,0,2.53,3.574A11.686,11.686,0,0,0,13.789,15.7l1.887-1.5a1,1,0,0,1,1.129-.073l4.581,2.961a1.213,1.213,0,0,1,.249,1.887l-2.366,2.342a2.876,2.876,0,0,1-2.045.837ZM5.155,2.859,2.728,5.195a1.541,1.541,0,0,0-.455,1.456,18.627,18.627,0,0,0,5.1,9.259A19.355,19.355,0,0,0,16.865,20.9a1.669,1.669,0,0,0,1.517-.449l2.366-2.342-4.423-2.858L14.3,16.868a.607.607,0,0,1-.558.1,12.171,12.171,0,0,1-4.466-2.882A11.825,11.825,0,0,1,6.32,9.721a.607.607,0,0,1,.146-.576L8.1,7.185Z"
        transform="translate(-0.751 -1.402)"
        fill={color}
        stroke={color}
        stroke-width="0.5"
      />
    </svg>
  );
};

export default PhoneHandset;
