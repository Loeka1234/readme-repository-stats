import { renderSVG } from "./renderSVG";

export const renderTotalPullRequests = (total: number) => {
  return renderSVG(
    `
      <style>
        .header {
          fill: black;
        }
      </style>
      <g>
        <text class="header">${total}</text>
      </g>
    `
  );
};
