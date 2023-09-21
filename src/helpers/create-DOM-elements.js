const createDiv = (divId, divClasses) => {
  const div = document.createElement("div");
  if (divId) div.id = divId;
  divClasses.forEach((divClass) => {
    div.classList.add(divClass);
  });
  return div;
};

const createHeader = (headerId, headerClasses, headerType, text) => {
  const header = document.createElement(headerType);
  if (headerId) header.id = headerId;
  headerClasses.forEach((headerClass) => {
    header.classList.add(headerClass);
  });
  header.textContent = text;
  return header;
};

export { createDiv, createHeader };
