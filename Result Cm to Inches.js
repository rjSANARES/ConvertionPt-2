function convert() {
    var centimeters = document.getElementById("centimeters").value;
    var Inches = centimeters * 0.0328084;
    document.getElementById("Inches").value = Inches.toFixed(2);
  }
  function clearInput() {
    document.getElementById("centimeters").value = "";
    document.getElementById("Inches").value = "";
  }
  