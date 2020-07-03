<<<<<<< HEAD
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//mostrar las acciones de los roles
$(".histo").hover(function () {
  $(".histori").css("display", "block");
}, function () {
  $(".histori").css("display", "none");
});
$(".editar").hover(function () {
  $(".edit").css("display", "block");
}, function () {
  $(".edit").css("display", "none");
});
$(".notify").hover(function () {
  $(".noti").css("display", "block");
}, function () {
  $(".noti").css("display", "none");
});
$(".ver").hover(function () {
  $(".veri").css("display", "block");
}, function () {
  $(".veri").css("display", "none");
});
$(".edi").hover(function () {
  $(".edita").css("display", "block");
}, function () {
  $(".edita").css("display", "none");
});
$(".borrar").hover(function () {
  $(".borra").css("display", "block");
}, function () {
  $(".borra").css("display", "none");
});
$(".ver").hover(function () {
  $(".veri1").css("display", "block");
}, function () {
  $(".veri1").css("display", "none");
});
$(".edi").hover(function () {
  $(".edita1").css("display", "block");
}, function () {
  $(".edita1").css("display", "none");
});
$(".borrar").hover(function () {
  $(".borra1").css("display", "block");
}, function () {
  $(".borra1").css("display", "none");
}); //fin
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

$("#viewcarga").click(function () {
  alert("cambio3");
  $("#carga-exitosa").replaceWith();
  $("#menu").load("Cargar-landing.php");
});
$("#viewbackgrilla").click(function () {
  alert("cambio50000");
  $("#grilla").replaceWith();
  $("#carga-exitosa").load("Progra_general.php");
}); //fin
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
} //fin


function AbrirNav() {
  $("#navall").load("#Admin-BO.php");
}

function verhisto() {
  $(".descri-overlay").show();
}

$(document).ready(function () {
  //Otro Array para los nombres de los meses
  var meses = new Array("ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE");
  var mesLetras = meses[fecha.getMonth()]; //El mes en letras

  $(".progra-month").text(mesLetras);
  var numDiaSem = fecha.getDay(); //getDay() devuelve el dia de la semana.(0-6).
  //Array para los nombres de los días

  var diasSemana = new Array("DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO");
  var diaLetras = diasSemana[fecha.getDay()]; //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).

  var diaMes = fecha.getDate(); //getDate() devuelve el dia(1-31).

  var dianumero = diaLetras + " " + diaMes;
  $(".day").text(dianumero); //resaltar boton de localidad-actual

  $(".btn-rol-all").click(function () {
    $("button[id=btn-rol]").removeClass("btn-rol-select");
    $(this).addClass("btn-rol");
    $("button[id=btn-rol]").removeClass("btn-rol");
    $(this).addClass("btn-rol-select");
  });
  $("button[id=btn-landing]").click(function () {
    if ($(this).hasClass("btn-landing") & $(this).hasClass("text-landing")) {
      $(this).removeClass("btn-landing").addClass("btn-grilla");
      $(this).removeClass("text-landing").addClass("text-grilla");
      $("button[id=btn-grilla]").addClass("btn-landing").removeClass("btn-grilla");
      $("button[id=btn-grilla]").addClass("text-landing").removeClass("text-grilla");
    }
  });
  $("button[id=btn-grilla]").click(function () {
    if ($(this).hasClass("btn-landing") & $(this).hasClass("text-landing")) {
      $(this).addClass("btn-grilla").removeClass("btn-landing");
      $(this).addClass("text-grilla").removeClass("text-landing");
      $("button[id=btn-landing]").addClass("btn-landing").removeClass("btn-grilla");
      $("button[id=btn-landing]").addClass("text-landing").removeClass("text-grilla");
    }
  });
  var allSlides = $(".bn-nav");
  $(".bn-nav").click(function () {
    allSlides.addClass("btn-menu-all").removeClass("btn-menu-select");
    allSlides.addClass("text-menu-selec").removeClass("menu");
    $(this).addClass("btn-menu-select").removeClass("btn-menu-all");
    $(this).addClass("menu").removeClass("text-menu-selec");
  });
  var allnav = $(".sub-nav");
  $(".sub-nav").click(function () {
    allnav.addClass("txtmenu").removeClass("btn-menu-select");
    allnav.addClass("text-menu-selec").removeClass("menu");
    $(this).addClass("btn-menu-select").removeClass("txtmenu");
    $(this).addClass("menu").removeClass("text-menu-selec");
  }); //fin
  //descripción de acciones
  //seleccion de día,mes,año,bandera

  $(".option").click(function () {
    var value = $(this).attr("value");
    var select = $(this).attr("id-select");
    var img = $(this).attr("img");
    $("#" + select + " > p").val(img).text(value);
  });
  $(".Dias").click(function () {
    var value = $(this).attr("value");
    var select = $(this).attr("id-select");
    $("#" + select + " > p").text(value);
  });
  $(".Meses").click(function () {
    var value = $(this).attr("value");
    var select = $(this).attr("id-select");
    $("#" + select + " > p").text(value);
  });
  $(".Años").click(function () {
    var value = $(this).attr("value");
    var select = $(this).attr("id-select");
    $("#" + select + " > p").text(value);
  }); //fin
  //switch entre h-m

  $("#mujer").click(function () {
    if ($('input[id="mujer"]').is(":checked")) {
      $("#women").attr("src", "../images/datos-adicionales/femenino-activo.svg");
      $("#men").attr("src", "../images/datos-adicionales/masculino-inactivo.svg");
    }
  });
  $("#hombre").click(function () {
    if ($('input[id="hombre"]').is(":checked")) {
      $("#women").attr("src", "../images/datos-adicionales/femenino-inactivo.svg");
      $("#men").attr("src", "../images/datos-adicionales/masculino-activo.svg");
    }
  });
  $("#sino-save").click(function () {
    if ($('input[id="sino-save"]').is(":checked")) {
      //alert("cambio2");
      $("#savesino").modal("show");
    }
  });
  $("#back-list").click(function () {
    $("#prev-sinopsis").replaceWith();
    $("#navbar-prev-sinopsis").load("submenu.php");
  });
  $("#viewapro").click(function () {
    //alert("cambio3");
    $("#savechange").modal("show");
  }); //fin
  //slider, c/flecha

  $(".slider li").hide();
  $(".slider li:first").show(); //para agregar una nueva fila

  $("#agregar").click(function () {
    agregar();
  });
});

function agregar() {
  var fila = ' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ';
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

/***/ }),

/***/ 16:
/*!*************************************!*\
  !*** multi ./resources/js/admin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/BackofficeClaroNetworks/resources/js/admin.js */"./resources/js/admin.js");


/***/ })

/******/ });
=======
!function(n){var e={};function t(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(a,i,function(e){return n[e]}.bind(null,i));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=16)}({16:function(n,e,t){n.exports=t("ByIP")},ByIP:function(n,e){$(".histo").hover((function(){$(".histori").css("display","block")}),(function(){$(".histori").css("display","none")})),$(".editar").hover((function(){$(".edit").css("display","block")}),(function(){$(".edit").css("display","none")})),$(".notify").hover((function(){$(".noti").css("display","block")}),(function(){$(".noti").css("display","none")})),$(".ver").hover((function(){$(".veri").css("display","block")}),(function(){$(".veri").css("display","none")})),$(".edi").hover((function(){$(".edita").css("display","block")}),(function(){$(".edita").css("display","none")})),$(".borrar").hover((function(){$(".borra").css("display","block")}),(function(){$(".borra").css("display","none")})),$(".ver").hover((function(){$(".veri1").css("display","block")}),(function(){$(".veri1").css("display","none")})),$(".edi").hover((function(){$(".edita1").css("display","block")}),(function(){$(".edita1").css("display","none")})),$(".borrar").hover((function(){$(".borra1").css("display","block")}),(function(){$(".borra1").css("display","none")})),$("#viewcarga").click((function(){alert("cambio3"),$("#carga-exitosa").replaceWith(),$("#menu").load("Cargar-landing.php")})),$("#viewbackgrilla").click((function(){alert("cambio50000"),$("#grilla").replaceWith(),$("#carga-exitosa").load("Progra_general.php")})),$(document).ready((function(){var n=new Array("ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE")[t.getMonth()];$(".progra-month").text(n);t.getDay();var e=new Array("DOMINGO","LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO")[t.getDay()]+" "+t.getDate();$(".day").text(e),$(".btn-rol-all").click((function(){$("button[id=btn-rol]").removeClass("btn-rol-select"),$(this).addClass("btn-rol"),$("button[id=btn-rol]").removeClass("btn-rol"),$(this).addClass("btn-rol-select")})),$("button[id=btn-landing]").click((function(){$(this).hasClass("btn-landing")&$(this).hasClass("text-landing")&&($(this).removeClass("btn-landing").addClass("btn-grilla"),$(this).removeClass("text-landing").addClass("text-grilla"),$("button[id=btn-grilla]").addClass("btn-landing").removeClass("btn-grilla"),$("button[id=btn-grilla]").addClass("text-landing").removeClass("text-grilla"))})),$("button[id=btn-grilla]").click((function(){$(this).hasClass("btn-landing")&$(this).hasClass("text-landing")&&($(this).addClass("btn-grilla").removeClass("btn-landing"),$(this).addClass("text-grilla").removeClass("text-landing"),$("button[id=btn-landing]").addClass("btn-landing").removeClass("btn-grilla"),$("button[id=btn-landing]").addClass("text-landing").removeClass("text-grilla"))}));var a=$(".bn-nav");$(".bn-nav").click((function(){a.addClass("btn-menu-all").removeClass("btn-menu-select"),a.addClass("a-text-bold-brown-two").removeClass("menu"),$(this).addClass("btn-menu-select").removeClass("btn-menu-all"),$(this).addClass("menu").removeClass("a-text-bold-brown-two")}));var i=$(".sub-nav");$(".sub-nav").click((function(){i.addClass("txtmenu").removeClass("btn-menu-select"),i.addClass("text-menu-selec").removeClass("menu"),$(this).addClass("btn-menu-select").removeClass("txtmenu"),$(this).addClass("menu").removeClass("text-menu-selec")})),$(".option").click((function(){var n=$(this).attr("value"),e=$(this).attr("id-select"),t=$(this).attr("img");$("#"+e+" > p").val(t).text(n)})),$(".Dias").click((function(){var n=$(this).attr("value"),e=$(this).attr("id-select");$("#"+e+" > p").text(n)})),$(".Meses").click((function(){var n=$(this).attr("value"),e=$(this).attr("id-select");$("#"+e+" > p").text(n)})),$(".Años").click((function(){var n=$(this).attr("value"),e=$(this).attr("id-select");$("#"+e+" > p").text(n)})),$("#mujer").click((function(){$('input[id="mujer"]').is(":checked")&&($("#women").attr("src","../images/datos-adicionales/femenino-activo.svg"),$("#men").attr("src","../images/datos-adicionales/masculino-inactivo.svg"))})),$("#hombre").click((function(){$('input[id="hombre"]').is(":checked")&&($("#women").attr("src","../images/datos-adicionales/femenino-inactivo.svg"),$("#men").attr("src","../images/datos-adicionales/masculino-activo.svg"))})),$("#sino-save").click((function(){$('input[id="sino-save"]').is(":checked")&&$("#savesino").modal("show")})),$("#back-list").click((function(){$("#prev-sinopsis").replaceWith(),$("#navbar-prev-sinopsis").load("submenu.php")})),$("#viewapro").click((function(){$("#savechange").modal("show")})),$(".slider li").hide(),$(".slider li:first").show(),$("#agregar").click((function(){$("#tb1").append(' <div class="contenedor-fila"><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div><div class="contenedor-columna"></div></div> ')}))}));var t=new Date}});
>>>>>>> aeafa168918cf65e5f642196e3efe8f378aa4826
