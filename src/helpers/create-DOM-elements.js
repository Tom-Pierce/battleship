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

const createImg = (imgId, imgClasses, imgSrc) => {
  const img = document.createElement("img");
  if (imgId) img.id = imgId;
  imgClasses.forEach((imgClass) => {
    img.classList.add(imgClass);
  });
  img.src = imgSrc;
  return img;
};

export { createDiv, createHeader, createImg };
