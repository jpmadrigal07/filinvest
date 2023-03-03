import React from "react";

const Facebook = ({ color = "white" }: { color?: string }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition hover:opacity-70"
    >
      <path
        d="M4.74405 9.5868H6.71714V17.7097C6.71714 17.8701 6.84708 18 7.00746 18H10.3529C10.5133 18 10.6432 17.8701 10.6432 17.7097V9.62506H12.9115C13.0589 9.62506 13.183 9.51439 13.1999 9.3679L13.5444 6.37746C13.5538 6.29518 13.5278 6.21279 13.4727 6.15106C13.4176 6.08928 13.3388 6.05392 13.256 6.05392H10.6433V4.17937C10.6433 3.61428 10.9476 3.32774 11.5478 3.32774C11.6333 3.32774 13.256 3.32774 13.256 3.32774C13.4164 3.32774 13.5463 3.19773 13.5463 3.03741V0.292471C13.5463 0.132097 13.4164 0.00214839 13.256 0.00214839H10.9018C10.8852 0.00133548 10.8483 0 10.794 0C10.3855 0 8.96563 0.080187 7.84405 1.11199C6.60136 2.2554 6.7741 3.62445 6.81538 3.86181V6.05386H4.74405C4.58367 6.05386 4.45372 6.18381 4.45372 6.34419V9.29642C4.45372 9.45679 4.58367 9.5868 4.74405 9.5868Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;
