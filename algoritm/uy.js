let a = prompt("Birinchi sonni kiriting:");
let b = prompt("Ikkinchi sonni kiriting:");

a = parseFloat(a);
b = parseFloat(b);

if (isNaN(a) || isNaN(b)) {
  alert("Iltimos, haqiqiy sonlarni kiriting.");
} else {
  // Katta sonni tekshiramiz
  if (a > b) {
    alert(`Birinchi son (${a}) ikkinchisidan (${b}) kattaroq.`);
  } else if (b > a) {
    alert(`Ikkinchi son (${b}) birinchisidan (${a}) kattaroq.`);
  } else {
    alert("Ikkala son ham teng.");
  }
}