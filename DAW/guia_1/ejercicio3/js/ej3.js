var tempC = prompt("Ingresa la temperatura a convertir en grados celsius: ");
var tempF;
if(!isNaN(tempC)){
tempF = (tempC * 9 / 5) + 32;
    document.write("<section class='convMP'>");
    document.write("<h2>Conversión de temperaturas</h2>");
    document.write("<i class='fas fa-thermometer-half'></i>")
    document.write("<p><span>" + tempC + " °C</span> es equivalente a  <span>" + tempF.toFixed(2) + " °F</span></p>");
    document.write("</section>");
    document.write("<section class='back'>");
    document.write("<i class='fas fa-arrow-left'></i><a href='../dashboard.html'>Regresar</a>");
    document.write("</section>");
}else{
    alert("El valor ingresado no es válido");
    document.write("<section class='back'>");
    document.write("<i class='fas fa-arrow-left'></i><a href='../dashboard.html'>Regresar</a>");
    document.write("</section>");
}