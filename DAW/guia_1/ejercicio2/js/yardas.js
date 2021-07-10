var met = prompt("Ingrese los metros a convertir: ");
var yardas;
if(!isNaN(met) && (met >= 0)){
    yardas = met * 39.37;
    document.write("<section class='convMP'>");
    document.write("<h2>Resultado de la conversión</h2>");
    document.write("<i class='fas fa-check-square'></i>")
    document.write("<p><span>" + met + " metros</span> es equivalente a  <span>" + yardas.toFixed(2) + " yardas</span></p>");
    document.write("</section>");
    document.write("<section class='back'>");
    document.write("<i class='fas fa-arrow-left'></i><a href='conversion.html'>Regresar</a>");
    document.write("</section>");
    
}else{
    alert("El valor ingresado no es válido");
    document.write("<section class='back'>");
    document.write("<i class='fas fa-arrow-left'></i><a href='conversion.html'>Regresar</a>");
    document.write("</section>");
}
