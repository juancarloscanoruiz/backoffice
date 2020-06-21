//mostrar las acciones de los roles
$(".histo").hover(
    function() {
        $(".histori").css("display", "block");
    },
    function() {
        $(".histori").css("display", "none");
    }
);
$(".editar").hover(
    function() {
        $(".edit").css("display", "block");
    },
    function() {
        $(".edit").css("display", "none");
    }
);
$(".notify").hover(
    function() {
        $(".noti").css("display", "block");
    },
    function() {
        $(".noti").css("display", "none");
    }
);
$(".ver").hover(
    function() {
        $(".veri").css("display", "block");
    },
    function() {
        $(".veri").css("display", "none");
    }
);
$(".edi").hover(
    function() {
        $(".edita").css("display", "block");
    },
    function() {
        $(".edita").css("display", "none");
    }
);
$(".borrar").hover(
    function() {
        $(".borra").css("display", "block");
    },
    function() {
        $(".borra").css("display", "none");
    }
);
$(".ver").hover(
    function() {
        $(".veri1").css("display", "block");
    },
    function() {
        $(".veri1").css("display", "none");
    }
);
$(".edi").hover(
    function() {
        $(".edita1").css("display", "block");
    },
    function() {
        $(".edita1").css("display", "none");
    }
);
$(".borrar").hover(
    function() {
        $(".borra1").css("display", "block");
    },
    function() {
        $(".borra1").css("display", "none");
    }
); //fin
//fin
//Remplazar vistas

function muestra1() {
    $("#Admin-home-BO").replaceWith();
    $("#cambio").load("admin-home.php");
}

function verusuarios() {
    $("#usuarios").replaceWith();
    $("#cambio").load("VisualUser.php");
}
function editarusuarios() {}
function verfront() {}
function editfront() {}
function cerrarequis() {
    $("#segunda").replaceWith();
    $("#cambio").load("Adm-users-BO.php");
}
function Verarchi() {
    $("#carga").replaceWith();
    $("#rempla").load("Cargar.php");
}

function grilla() {
    $("#grilla").replaceWith();
    $("#bodymenu").load("Progra_general.php");
}

function abrirprogram() {
    $(location).attr("href", "Menu.php");
}

function viewsinopsis() {
    $("#prev-sinopsis").replaceWith();
    $("#changeview").load("Prev-sinopsis.php");
}
$("#viewcarga").click(function() {
    alert("cambio3");
    $("#carga-exitosa").replaceWith();
    $("#menu").load("Cargar-landing.php");
});
$("#viewbackgrilla").click(function() {
    alert("cambio50000");
    $("#grilla").replaceWith();
    $("#carga-exitosa").load("Progra_general.php");
});

//fin
//modales
function abrirModal() {
    $("#myModal").modal();
}
function Mostrarsave() {
    $("#abrirsave").modal("show");
}
function abrirBorrar() {
    $("#abrirBorrar").modal("show");
}
function abrirlisto() {
    $("#abrirListo").modal("show");
}

//fin
function AbrirNav() {
    $("#navall").load("#Admin-BO.php");
}
function verhisto() {
    $(".descri-overlay").show();
}

$(document).ready(function() {
    //Otro Array para los nombres de los meses
    let meses = new Array(
        "ENERO",
        "FEBRERO",
        "MARZO",
        "ABRIL",
        "MAYO",
        "JUNIO",
        "JULIO",
        "AGOSTO",
        "SEPTIEMBRE",
        "OCTUBRE",
        "NOVIEMBRE",
        "DICIEMBRE"
    );
    let mesLetras = meses[fecha.getMonth()]; //El mes en letras
    $(".progra-month").text(mesLetras);
    let numDiaSem = fecha.getDay(); //getDay() devuelve el dia de la semana.(0-6).
    //Array para los nombres de los días
    let diasSemana = new Array(
        "DOMINGO",
        "LUNES",
        "MARTES",
        "MIÉRCOLES",
        "JUEVES",
        "VIERNES",
        "SÁBADO"
    );
    let diaLetras = diasSemana[fecha.getDay()]; //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).

    let diaMes = fecha.getDate(); //getDate() devuelve el dia(1-31).
    let dianumero = diaLetras + " " + diaMes;
    $(".day").text(dianumero);
    //resaltar boton de localidad-actual
    $(".buttonall").click(function() {
        $("button[id=btn-nav]").removeClass("btn-nav-select");
        $(this).addClass("btn-nav");
        $("button[id=btn-nav]").removeClass("btn-nav");
        $(this).addClass("btn-nav-select");
    });
    $(".btn-rol-all").click(function() {
        console.log("pojpoj");
        $("button[id=btn-rol]").removeClass("btn-rol-select");
        $(this).addClass("btn-rol");
        $("button[id=btn-rol]").removeClass("btn-rol");
        $(this).addClass("btn-rol-select");
    });
    $("button[id=btn-landing]").click(function() {
        if (
            $(this).hasClass("btn-landing") & $(this).hasClass("text-landing")
        ) {
            $(this)
                .removeClass("btn-landing")
                .addClass("btn-grilla");
            $(this)
                .removeClass("text-landing")
                .addClass("text-grilla");
            $("button[id=btn-grilla]")
                .addClass("btn-landing")
                .removeClass("btn-grilla");
            $("button[id=btn-grilla]")
                .addClass("text-landing")
                .removeClass("text-grilla");
        }
    });
    $("button[id=btn-grilla]").click(function() {
        if ($(this).hasClass("btn-grilla") & $(this).hasClass("text-grilla")) {
            $(this)
                .addClass("btn-landing")
                .removeClass("btn-grilla");
            $(this)
                .addClass("text-landing")
                .removeClass("text-grilla");
            $("button[id=btn-landing]")
                .addClass("btn-grilla")
                .removeClass("btn-landing");
            $("button[id=btn-landing]")
                .addClass("text-grilla")
                .removeClass("text-landing");
        } else if (
            $(this).hasClass("btn-landing") & $(this).hasClass("text-landing")
        ) {
            $(this)
                .addClass("btn-grilla")
                .removeClass("btn-landing");
            $(this)
                .addClass("text-grilla")
                .removeClass("text-landing");
            $("button[id=btn-landing]")
                .addClass("btn-landing")
                .removeClass("btn-grilla");
            $("button[id=btn-landing]")
                .addClass("text-landing")
                .removeClass("text-grilla");
        }
    });
    const allSlides = $(".bn-nav");
    $(".bn-nav").click(function() {
        allSlides.addClass("btn-menu-all").removeClass("btn-menu-select");
        allSlides.addClass("text-menu-selec").removeClass("menu");
        $(this)
            .addClass("btn-menu-select")
            .removeClass("btn-menu-all");
        $(this)
            .addClass("menu")
            .removeClass("text-menu-selec");
    });
    const allnav = $(".sub-nav");
    $(".sub-nav").click(function() {
        allnav.addClass("txtmenu").removeClass("btn-menu-select");
        allnav.addClass("text-menu-selec").removeClass("menu");
        $(this)
            .addClass("btn-menu-select")
            .removeClass("txtmenu");
        $(this)
            .addClass("menu")
            .removeClass("text-menu-selec");
    });

    //fin
    //descripción de acciones

    //seleccion de día,mes,año,bandera
    $(".option").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");
        var img = $(this).attr("img");
        $("#" + select + " > p")
            .val(img)
            .text(value);
    });

    $(".Dias").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });
    $(".Meses").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });
    $(".Años").click(function() {
        var value = $(this).attr("value");
        var select = $(this).attr("id-select");

        $("#" + select + " > p").text(value);
    });
    //fin
    //switch entre h-m
    $("#mujer").click(function() {
        if ($('input[id="mujer"]').is(":checked")) {
            $("#women").attr(
                "src",
                "../images/datos-adicionales/femenino-activo.svg"
            );
            $("#men").attr(
                "src",
                "../images/datos-adicionales/masculino-inactivo.svg"
            );
        }
    });

    $("#hombre").click(function() {
        if ($('input[id="hombre"]').is(":checked")) {
            $("#women").attr(
                "src",
                "../images/datos-adicionales/femenino-inactivo.svg"
            );
            $("#men").attr(
                "src",
                "../images/datos-adicionales/masculino-activo.svg"
            );
        }
    });

    //previsualizar-editar

    $("#edit").click(function() {
        if ($('input[id="edit"]').is(":checked")) {
            $("#navbar-prev-canal-claro").html(` <script>
      new easyXDM.Socket({
          remote: "./prev/claro-canal.php",
          container: "navbar-prev-canal-claro",
          onMessage: function(message, origin) {
              console.log(message);
              this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
              this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
              this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";

          }
      });
  </script>`);
        }
    });
    $("#prev").click(function() {
        if ($('input[id="prev"]').is(":checked")) {
            alert("cambio2");
            $("#navbar-prev-canal-claro").html(` <script>
    new easyXDM.Socket({
        remote: "./prev/programacion.php",
        container: "navbar-prev-canal-claro",
        onMessage: function(message, origin) {
            console.log(message);
            this.container.getElementsByTagName("iframe")[0].style.height = message + "px";
            this.container.getElementsByTagName("iframe")[0].setAttribute("scrolling", "no");
            this.container.getElementsByTagName("iframe")[0].style.boxShadow = "rgba(0, 0, 0, 0.5) -1px -1px 17px 9px";
        }
    });
</script>`);
        }
    });
    $("#sino-save").click(function() {
        if ($('input[id="sino-save"]').is(":checked")) {
            alert("cambio2");
            $("#savesino").modal("show");
        }
    });
    $("#back-list").click(function() {
        $("#prev-sinopsis").replaceWith();
        $("#navbar-prev-sinopsis").load("submenu.php");
    });
    $("#viewapro").click(function() {
        alert("cambio3");
        $("#savechange").modal("show");
    });

    //fin

    //slider, c/flecha
    $(".slider li").hide();
    $(".slider li:first").show();
    //para agregar una nueva fila
    $("#agregar").click(function() {
        agregar();
    });
});

function agregar() {
    var fila =
        ' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ';
    $("#tb1").append(fila);
}
var fecha = new Date(); //Declaramos el objeto fecha actual

/*$("#option").carousel({ wrap: false });
$("#option").carousel("pause");

// Enable Carousel Controls
$(".arrow-right").click(function () {
  $("#option").carousel("prev");
});
$(".arrow-left").click(function () {
  $("#option").carousel("next");
});*/
/**
 *
 * METODOS PARA SUBIR PROGRAMACION
 */

/**
 * Obtener el archivo subido
 */

$("#inp_programing").on("change", function() {
    /**
     * JS hace dos cambios en el submit, por lo que se hacen dos llamados a esta funcion
     * esto para no caursar poroblemas mayores se manda a null e value del form
     * saldra un error de Jquery ignorar -> TypeError: "this.files[0] is undefined"
     */
    try {
        var file = this.files[0];
        var filename = this.files[0].name;

        if (filename != null) {
            var splName = filename.split(".");
            var fileFormat = splName[splName.length - 1];
            if (fileFormat != "xlsx" && fileFormat != "xls") {
                alert("formato invalido, por favor sube un excel");
            } else {
                sendFilePHP(file);
            }
        }
    } catch (error) {
        console.log(error);
    }
    this.value = null; //aqui para evitar que se hagan registros dobles
});

/**
 * Eviar archivo mediante ajax a un "controlador" php
 */

function sendFilePHP(file) {
    console.log("enviando a php");
    //creamos un dato de formulario para pasarlo en el ajax
    let data = new FormData();
    data.append("file", file);
    //Realizamos el ajax
    $.ajax({
        type: "POST",
        data: data,
        processData: false, //esto es para poder pasar el archivo
        contentType: false, //esto es para poder pasar el archivo
        url: "./adapters/C_programing.php",
        success: function(result) {
            //var programas = JSON.parse(result);
            console.log("php responde:" + result);
            //console.log(programas);

            $("#programacion").replaceWith(result);
        }
    }).fail(function(e) {
        console.log(e);
    });
}
