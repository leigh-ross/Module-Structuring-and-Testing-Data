export function getOrdinalNumber(num) {
  if (String(num).slice(-2) === "11"){
    return `${num}th`;
  }
  else if (String(num).slice(-2) === "12"){
    return `${num}th`;
  }
  else if (String(num).slice(-2) === "13"){
    return `${num}th`;
  }
    if (String(num).slice(-1) === "2") {
      return `${num}nd`;
    } else if (String(num).slice(-1) === "3") {
      return `${num}rd`;
    } else if (String(num).slice(-1) === "1") {
      return `${num}st`;
    }
  return `${num}th`;
};
