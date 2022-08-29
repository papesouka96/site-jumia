var slide = new Array("SN_W31_712x384_COOLING_V2.jpeg.jpg", "Slider1.jpg", "slider2.jpg", "Slider3.gif","Slider4.jpeg","Slider5.gif","Slider6.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}setInterval("ChangeSlide(1)", 4000);



