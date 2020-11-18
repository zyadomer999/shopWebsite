function verify(element) {
  if (parseInt(element.width) != parseInt(element.height)) {
    element.style.width = "100%";
    element.style.height = "100%";
  }
}
