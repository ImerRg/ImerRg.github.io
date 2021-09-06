(function() {
    window.onload = function() {
        let nombres_apellidos = document.getElementById("nombres");
        let fecha_de_nacimiento = document.getElementById("fecha");
        let Apellpaterno = document.getElementById("apellpat");
        let Apellmaterno = document.getElementById("apellmat");
        let nombre = document.getElementById("nomb");
        let longitud = document.getElementById("longapell");
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
        let label1 = document.getElementById("textoapellpaterno");

        let contador = 0;
    };
})();