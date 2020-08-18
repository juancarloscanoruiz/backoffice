import $ from "jquery";

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

    $(".btn-rol-all").click(function() {
        $("button[id=btn-rol]").removeClass("btn-rol-select");
        $(this).addClass("btn-rol");
        $("button[id=btn-rol]").removeClass("btn-rol");
        $(this).addClass("btn-rol-select");
    });

    const allSlides = $(".bn-nav");
    $(".bn-nav").click(function() {
        allSlides.addClass("btn-menu-all").removeClass("btn-menu-select");
        allSlides.addClass("a-text-bold-brown-two").removeClass("menu");
        $(this)
            .addClass("btn-menu-select")
            .removeClass("btn-menu-all");
        $(this)
            .addClass("menu")
            .removeClass("a-text-bold-brown-two");
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

    $("#sino-save").click(function() {
        if ($('input[id="sino-save"]').is(":checked")) {
            //alert("cambio2");
            $("#savesino").modal("show");
        }
    });
    $("#back-list").click(function() {
        $("#prev-sinopsis").replaceWith();
        $("#navbar-prev-sinopsis").load("submenu.php");
    });
    $("#viewapro").click(function() {
        //alert("cambio3");
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

// ZAID
function modal(){
    $('#modal').modal('show');
  }
modal();
// ZAID
