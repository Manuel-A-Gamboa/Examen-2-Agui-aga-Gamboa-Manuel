

function toggleMenu() {
    var menuDesplegable = document.getElementById("menuDesplegable");
    menuDesplegable.style.display = (menuDesplegable.style.display === "block") ? "none" : "block";
  }

  var formularioContainer = document.getElementById("formularioContainer");
  var fondoOscuro = document.getElementById("fondoOscuro");

    function toggleFormulario() {
      formularioContainer.style.display = "block";
      fondoOscuro.style.display = "block";
      formularioContainer.style.top = (formularioContainer.style.top === "0px") ? "-100%" : "0";
    }

  document.addEventListener("click", function(event) {
    var estaDentroDelFormulario = formularioContainer.contains(event.target);
    var esElBotonDeRegistro = event.target === document.getElementById("btn-registro");

    if (!estaDentroDelFormulario && !esElBotonDeRegistro) {
        formularioContainer.style.top = "-100%";

        setTimeout(function() {
          formularioContainer.style.display = "none";
          fondoOscuro.style.display = "none";
        }, 700); // Espera a que termine la animación antes de ocultar el formulario
      }
    });


    let sliderInner= document.querySelector(".slider-inner");
    var sliderButtonIzq = document.getElementById("sliderButtonIzq");
    var sliderButtonDer = document.getElementById("sliderButtonDer");

    let index =1;
    let percentage
    function moverIzq() {
        if(index==1)
        {
            index=0;
            percentage = 2 * -100;
            sliderInner.style.transform= "translateX(" + percentage + "%)";
        }
        else{
            if(index==0)
            {
                index=2
                percentage = index * -50;
                sliderInner.style.transform= "translateX(" + percentage + "%)";
            }
            else{
                if(index==2)
                {
                    index=1
                    percentage = index * 0;
                    sliderInner.style.transform= "translateX(" + percentage + "%)";
                }
            }
        }
    }
    function moverDer(){
        if(index==1)
        {
            index=2;
            percentage = -100;
            sliderInner.style.transform= "translateX(" + percentage + "%)";
        }
        else{
            if(index==0)
            {
                index=1
                percentage = 0;
                sliderInner.style.transform= "translateX(" + percentage + "%)";
            }
            else{
                if(index==2)
                {
                    index=0
                    percentage = -200;
                    sliderInner.style.transform= "translateX(" + percentage + "%)";
                }
            }
        }
    }
    setInterval(function(){

        
        percentage = index * -100;
        sliderInner.style.transform= "translateX(" + percentage + "%)";
        index++;
        if(index > 2) {
            index=0;
        }
    },6000);


    let sliderInner2= document.querySelector(".slider-inner-2");
    var sliderButtonIzq2 = document.getElementById("sliderButtonIzq2");
    var sliderButtonDer2 = document.getElementById("sliderButtonDer2");

    let i =1;
    let prc;
    function moverIzq2() {
        if(i==1)
        {
            i=0;
            prc = -500;
            sliderInner2.style.transform= "translateX(" + prc + "%)";
        }
        else{
            if(i==3)
            {
                i=2
                prc = i * -50;
                sliderInner2.style.transform= "translateX(" + prc + "%)";
            }
            else{
                if(i==2)
                {
                    i=1
                    prc = i * 0;
                    sliderInner2.style.transform= "translateX(" + prc + "%)";
                }
                else
                {
                    if(i==4)
                    {
                        i=3;
                        prc= -200;
                        sliderInner2.style.transform= "translateX(" + prc + "%)";

                    }
                    else
                    {
                        if(i==5)
                        {
                           i=4;
                           prc= -300;
                           sliderInner2.style.transform= "translateX(" + prc + "%)";
                        }
                        else
                        {
                            if(i==0)
                            {
                                i=5;
                                prc= -400;
                                sliderInner2.style.transform= "translateX(" + prc + "%)";

                            }
                        }
                    }
                }
            }
        }
    }
    function moverDer2(){
        if(i==1)
        {
            i=2;
            prc = -100;
            sliderInner2.style.transform= "translateX(" + prc + "%)";
        }
        else{
            if(i==3)
            {
                i=4
                prc = -300;
                sliderInner2.style.transform= "translateX(" + prc + "%)";
            }
            else{
                if(i==2)
                {
                    i=3
                    prc = -200;
                    sliderInner2.style.transform= "translateX(" + prc + "%)";
                }
                else
                {
                    if(i==4)
                    {
                        i=5;
                        prc= -400;
                        sliderInner2.style.transform= "translateX(" + prc + "%)";

                    }
                    else
                    {
                        if(i==5)
                        {
                           i=0;
                           prc= -500;
                           sliderInner2.style.transform= "translateX(" + prc + "%)";
                        }
                        else
                        {
                            if(i==0)
                            {
                                i=1;
                                prc= 0;
                                sliderInner2.style.transform= "translateX(" + prc + "%)";

                            }
                        }
                    }
                }
            }
        }
    }
    setInterval(function(){

        
        prc = i * -100;
        sliderInner2.style.transform= "translateX(" + prc + "%)";
        i++;
        if(i > 5) {
            i=0;
        }
    },4000);

    let sliderInner3= document.querySelector(".slider-inner-3");
    var sliderButtonIzq3 = document.getElementById("sliderButtonIzq3");
    var sliderButtonDer3 = document.getElementById("sliderButtonDer3");

    let i2 =1;
    let prc2;
    function moverIzq3() {
        if(i2==1)
        {
            i2=0;
            prc2 = -100;
            sliderInner3.style.transform= "translateX(" + prc2 + "%)";
        }
        else
        {
            if(i2==0)
            {
                i2=1;
            prc2 = 0;
            sliderInner3.style.transform= "translateX(" + prc2 + "%)";
            }
        }
    }
    function moverDer3(){
        if(i2==1)
        {
            i2=0;
            prc2 = 0;
            sliderInner3.style.transform= "translateX(" + prc2 + "%)";
        }
        else
        {
            if(i2==0)
            {
                i2=1;
            prc2 = -100;
            sliderInner3.style.transform= "translateX(" + prc2 + "%)";
            }
        }
    }
    setInterval(function(){

        
        prc2 = i2 * -100;
        sliderInner3.style.transform= "translateX(" + prc2 + "%)";
        i2++;
        if(i2 > 1) {
            i2=0;
        }
    },8000);

    
    var formularioContainerPie = document.getElementById("actForm");

    function toggleFormularioPie() {
      formularioContainerPie.style.display = "block";
      formularioContainerPie.style.bottom = (formularioContainerPie.style.bottom === "0px") ? "-100%" : "0";
    }

    var botonTop = document.getElementById("botonTop");

    // Muestra u oculta el botón según la posición de desplazamiento
    window.onscroll = function() {
      mostrarOcultarBoton();
    };

    function mostrarOcultarBoton() {
      // Muestra el botón cuando el usuario está a mitad de la página
      if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
        botonTop.style.display = "flex";
      } else {
        botonTop.style.display = "none";
      }
    }

    // Lleva al usuario de nuevo al top al hacer clic en el botón
    function regresarAlTop() {
      document.body.scrollTop = 0; // Para navegadores Safari
      document.documentElement.scrollTop = 0; // Para otros navegadores
    }