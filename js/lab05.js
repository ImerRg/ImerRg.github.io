(function() {
    window.onload = function() {
        let nombres_apellidos = document.getElementById("nombres");
        let fecha_de_nacimiento = document.getElementById("fecha");
        let Apellpaterno = document.getElementById("apellpat");
        let Apellmaterno = document.getElementById("apellmat");
        let nombre = document.getElementById("nomb");
        let longApellido = document.getElementById("longapell");
        let edad = document.getElementById("edad");
        let mes = document.getElementById("mesletras");
        let extraer = document.getElementById("extraer");
        let colorear = document.getElementById("colorear");

        function extraerDatos() {
            if (nombres_apellidos.value !== "" && fecha_de_nacimiento.value !== "") {
                let llenar = nombres_apellidos.value.split("");

                if (llenar[0] == null) {
                    Apellpaterno.value = "";
                } else {
                    Apellpaterno.value = llenar[0];
                    document.getElementById("nombres").value = "";
                }
                if (llenar[1] == null) {
                    document.getElementById("apellmat").value = "";
                } else {
                    document.getElementById("apellmat").value = llenar[1];
                    nombres_apellidos.value = "";
                }
                if (llenar[2] == null) {
                    document.getElementById("nomb").value = "";
                } else {
                    document.getElementById("nomb").value = llenar[2];
                    nombres_apellidos.value = "";
                }
                document.getElementById("longapell").value =
                    llenar[0].length + "letras";

                let anio = document.getElementById("fecha").value.split("-");
                if (document.getElementById("fecha").value !== "") {
                    let fecha_actual = new Date();
                    let anio_actual = fecha_actual.getFullYear();
                    if (anio[0] < anio_actual) {
                        let edad = anio_actual - anio[0];
                        document.getElementById("edad").value = edad + "años";
                        document.getElementById("fecha").value = "";
                    } else {
                        document.getElementById("edad").value = "No se puede calcular";
                    }
                }
                let meses = [""];
                switch (anio[1]) {
                    case "01":
                        meses = ["Enero"];
                        break;
                    case "02":
                        meses = ["Febrero"];
                        break;
                    case "03":
                        meses = ["Marzo"];
                        break;
                    case "04":
                        meses = ["Abril"];
                        break;
                    case "05":
                        meses = ["Mayo"];
                        break;
                    case "06":
                        meses = ["Junio"];
                        break;
                    case "07":
                        meses = ["Julio"];
                        break;
                    case "08":
                        meses = ["Agosto"];
                        break;
                    case "09":
                        meses = ["Septiembre"];
                        break;
                    case "10":
                        meses = ["Octubre"];
                        break;
                    case "11":
                        meses = ["Noviembre"];
                        break;
                    case "12":
                        meses = ["Diciembre"];
                        break;
                }
                document.getElementById("mesletras").value = meses;
            }
        }
        extraer.addEventListener("click", extraerDatos, true);

        let cuadro1 = document.getElementById("fila1");
        let cuadro2 = document.getElementById("fila2");
        let cuadro3 = document.getElementById("fila3");
        let cuadro4 = document.getElementById("fila4");
        let cuadro5 = document.getElementById("fila5");
        let cuadro6 = document.getElementById("fila6");
        let cuadro7 = document.getElementById("fila7");
        let cuadro8 = document.getElementById("fila8");

        let contador = 0;

        function cambiarColor() {
            if (contador == 0) {
                cuadro1.classList.add("rojo");
                cuadro2.classList.add("rojo");
                cuadro3.classList.add("rojo");
                cuadro4.classList.add("rojo");
                cuadro5.classList.add("rojo");
                cuadro6.classList.add("azul");
                cuadro7.classList.add("azul");
                cuadro8.classList.add("azul");
                contador = 1;
            } else {
                cuadro1.classList.remove("rojo");
                cuadro2.classList.remove("rojo");
                cuadro3.classList.remove("rojo");
                cuadro4.classList.remove("rojo");
                cuadro5.classList.remove("rojo");
                cuadro6.classList.remove("azul");
                cuadro7.classList.remove("azul");
                cuadro8.classList.remove("azul");
                contador = 0;
            }
        }
        colorear.addEventListener("click", cambiarColor, true);
    };
})();