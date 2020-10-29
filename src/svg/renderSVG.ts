export const renderSVG = (content: string) => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      ${content}
    </svg>
  `;
};
