


export function slideMin() {
  const minVal = document.querySelector(".min-val");
  const maxVal = document.querySelector(".max-val");
  const priceInputMin = document.querySelector(".min-input");
  const priceInputMax = document.querySelector(".max-input");
  const minTooltip = document.querySelector(".min-tooltip");
  const maxTooltip = document.querySelector(".max-tooltip");
  const minGap = 1500;
  const range = document.querySelector(".slider-track");
  const sliderMinValue = parseInt(minVal.min);
  const sliderMaxValue = parseInt(maxVal.max);
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  minTooltip.innerHTML = "$" + minVal.value;
  priceInputMin.value = minVal.value;
}

// function slideMax() {
//   let gap = parseInt(maxVal.value) - parseInt(minVal.value);
//   if (gap <= minGap) {
//     maxVal.value = parseInt(minVal.value) + minGap;
//   }
//   maxTooltip.innerHTML = "$" + maxVal.value;
//   priceInputMax.value = maxVal.value;
// }

/*function setArea() {
  range.style.left = `${
    ((minVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%`;

  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  minTooltip.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = `${
    100 -
    ((maxVal.value - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100
  }%`;
  maxTooltip.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}

function setMinInput() {
  let minPrice = parseInt(priceInputMin.value);
}

function setMaxInput() {
  let maxPrice = parseInt(priceInputMax.value);
}*/
