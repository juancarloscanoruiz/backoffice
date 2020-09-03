 <!-- SLAIDER -->
 <div class="modal pr-0 modal-programming-landing" id="modal-edi-claro" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
     <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 100%">
         <div class="modal-content">
             <div class="modal-body">
                 <img src="images/modals/tv-1.svg" class="modal-programming-landing-logo">
                 <p class="a-text-bold-tomato h2 text-uppercase text-center">Programación</p>
                 <!--Slider de calendario-->
                 <h3 class="h3 a-text-semibold-brownish-grey-three text-uppercase mb-4 mt-5"
                     id="slider-calendar-current-date">Octubre 2020</h3>
                 <img src="/images/modals/arrow-right.svg" class="float-left" alt="">
                 <img src="/images/modals/arrow-left.svg" class="float-right" alt="">
                 <section class="col-10 mx-auto">
                     <div class="mb-5 calendar-slider2 day-style">
                         <li class="programming-item programming-item-active py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">

                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>

                         </li>
                         <li class="programming-item py-2">
                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>
                         </li>
                         <li class="programming-item py-2">

                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>

                         </li>
                         <li class="programming-item py-2">

                             <p class="mb-0">MIE</p>
                             <p class="mb-0">01</p>

                         </li>
                     </div>
                 </section>
                 <div class="p-3 border-t border-r border-l border-b position-relative mb-3">
                     <img src="{{ asset('/images/pencil.svg') }}" alt="" class="pencil pencil-edit "
                         chapter_id="${program.chapter_id}">
                     <div class="schedule-container col-12 p-5 mx-auto mt-0">
                         <p class="mb-3 h3 schedule-title a-text-plus a-text-black-brown-two">
                             Lorem ipsum
                         </p>
                         <div class="schedule-item-body">
                             <div class="schedule-poster">
                                 <div class="poster">
                                     <div class="thumbnail-edit" _id="${program.chapter_id}">
                                         <img src="{{ asset('/images/synopsis/image-synopsis-horizontal.png') }}"
                                             class="w-100" alt="">
                                     </div>
                                 </div>
                             </div>
                             <div class="d-flex align-items-center mb-3">
                                 <span class="a-text-bold-silver cursor-pointer ml-2 text-uppercase">Carrusel 1</span>
                             </div>
                             <!-- INPUTS -->
                             <div>
                                 <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <span class="a-text-bold-warm">Inicio: <input id="inicio-programing-landing"
                                             type="text"
                                             class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-begin"
                                             placeholder="00-00-0000" key="in_landing_begin" /></span>
                                 </div>
                                 <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                     <span class="a-text-bold-warm">Fin: <input id="fin-programing-landing" type="text"
                                             class="input-basic edit-program-input a-text-bold-warm edit-program-attribute-text schedule-date-input edit-landing-date-end"
                                             key="in_landing_expiration" placeholder="00-00-0000"></span>
                                 </div>
                             </div>
                             <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                             <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                 <span class="a-text-bold-warm">Inicio: <input type="text"
                                         class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-begin"
                                         key="in_landing_begin" placeholder="00:00:00"></span>
                             </div>
                             <div class="text-center edit-rectangle-small-container py-3">
                                 <span class="a-text-bold-warm">Fin: <input type="text"
                                         class="time-seconds-input input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase edit-landing-time-end"
                                         key="in_landing_expiration" placeholder="00:00:00"></span>
                             </div>
                         </div>
                     </div>
                     <!-- ESTABLECER EN HOME -->
                     <div class="col-4 edit-program-data-container edit-data-container-large">
                         <div class="edit-data-container h-100">
                             <p class="mb-3 text-plus text-plus text-uppercase a-text-bold-coolgray">Establecer en home
                             </p>
                             <!-- SWITCH -->
                             <div class="d-flex align-items-center edit-switches-home-container">
                                 <input type="radio" id="edit-in-home-yes" value="1"
                                     class="edit-switch-home edit-program-switch edit-in-home-yes" key="in_home" />
                                 <label for="edit-in-home-yes" id="siestado-landing"
                                     class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                 <input type="radio" id="edit-in-home-no" value="0" checked
                                     class="edit-switch-home edit-program-switch edit-in-home-no" key="in_home" />
                                 <label for="edit-in-home-no" id="noestado-landing"
                                     class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                             </div>
                             <!-- INPUTS -->
                             <div>
                                 <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <span class="a-text-bold-warm">Inicio: <input id="inicio-programing-home"
                                             key="in_home_begin" type="text"
                                             class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-begin edit-program-attribute-text"
                                             placeholder="00-00-0000" /></span>
                                 </div>
                                 <div class="mb-4 text-center edit-rectangle-small-container py-3">
                                     <span class="a-text-bold-warm">Fin: <input id="fin-programing-home" type="text"
                                             key="in_home_expiration"
                                             class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-home-date-end edit-program-attribute-text"
                                             placeholder="00-00-0000"></span>
                                 </div>
                             </div>
                             <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                             <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                 <span class="a-text-bold-warm">Inicio: <input key="in_home_begin" type="text"
                                         class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-begin"
                                         placeholder="00:00:00"></span>
                             </div>
                             <div class="text-center edit-rectangle-small-container py-3">
                                 <span class="a-text-bold-warm">Fin: <input type="text"
                                         class="time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase edit-home-time-end"
                                         placeholder="00:00:00"></span>
                             </div>
                         </div>
                     </div>
                     <!-- SCHEDULE ITEM DATE TIME -->
                     <div class="col-4 edit-program-data-container edit-data-container-large">
                         <div class="edit-data-container h-100">
                             <p class="edit-date-time-title text-plus text-plus text-uppercase a-text-bold-coolgray">
                                 Schedule Item Date time</p>
                             <!-- INPUTS -->
                             <div>
                                 <p class="mb-3 text-plus a-text-medium-coolgray text-uppercase">Fecha</p>
                                 <div class="text-center edit-rectangle-small-container py-2 d-flex align-content-center justify-content-center"
                                     style="margin-bottom: 81px">
                                     <img src="images/calendario.svg" alt="" class="mr-3">
                                     <input key="" type=" text"
                                         class="input-basic edit-program-input a-text-bold-warm schedule-date-input edit-schedule-date"
                                         placeholder="00-00-0000">
                                 </div>
                             </div>
                             <p class="mb-3 pt-3 text-plus a-text-medium-coolgray text-uppercase">Hora</p>
                             <div
                                 class="text-center edit-rectangle-small-container d-flex align-content-center justify-content-center py-2">
                                 <img src="images/reloj.svg'" alt="" class="mr-3">
                                 <input type="text"
                                     class="time-seconds-input input-basic edit-program-input a-text-bold-warm edit-schedule-item-time text-uppercase"
                                     placeholder="00:00:00">
                             </div>
                         </div>
                     </div> 
                 </div>
                 </section>

                 <!-- SINOPSIS -->
                 <section class="mb-4 edit-program-data-container" id="prog_sinopsis">
                 </section>

                 <!-- CARDS -->
                 <section class="mb-3">
                     <div class="row">
                         <!-- PROGRAM EPISODE SEASON -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode season
                                 </p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <input id="season-input" type="text" key="season"
                                         class="edit-program-season text-center input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                         placeholder="00">
                                 </div>
                             </div>
                         </div>
                         <!-- PROGRAM EPISODE NUMBER -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program episode number
                                 </p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <input id="episode-input" type="text" key="program_episode_number"
                                         class="text-center edit-episode-number input-basic edit-program-input edit-program-attribute-text a-text-bold-warm text-uppercase"
                                         placeholder="000">
                                 </div>
                             </div>
                         </div>
                         <!-- PROGRAM YEAR PRODUCED -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program year produced
                                 </p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <input id="year-input" type="text" key="program_year_produced"
                                         class="year-input text-center edit-year-produced input-basic edit-program-attribute-text edit-program-input a-text-bold-warm text-uppercase"
                                         placeholder="YYYY">
                                 </div>
                             </div>
                         </div> 
                     </div>
                 </section>
                 <!-- CARDS -->
                 <section class="mb-3">
                     <div class="row">
                         <!-- PROGRAM TITLE ALTERNATT -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program title alternate
                                 </p>
                                 <div class="mb-3 edit-rectangle-container p-3">
                                     <input id="sub-titulo-input" type="text" key="subtitle"
                                         class="w-100 edit-program-subtitle input-basic edit-program-input edit-program-attribute-text a-text-bold-warm"
                                         placeholder="Program Title Alternate">
                                 </div>
                             </div>
                         </div>
                         <!-- PROGRAM GENRE LIST -->
                         <div class="col-4 edit-program-data-container position-relative" id="edit-genre-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Program genre list</p>
                                 <div class="mb-3 edit-rectangle-container ">
                                     <select
                                         class="list1 mb-0 a-text-regular-brownishtwo text-normal  input-basic show-tick"
                                         id="edit-program-genres" title="Genere list" multiple data-live-search="true"
                                         data-live-search-placeholder="Buscar" data-header="Program List"
                                         data-dropup-auto="false" key="genre"></select>
                                 </div>
                             </div>
                         </div>
                         <!-- SCHEDULE ITEM RATING CODE -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule item rating
                                     code</p>
                                 <div class="mb-3 text-center edit-rectangle-small-container py-3">
                                     <input id="rating-input" type="text" key="rating"
                                         class="text-center edit-program-attribute-text input-basic edit-program-input a-text-bold-warm text-uppercase edit-rating-code"
                                         placeholder="PG-00">
                                 </div>
                             </div>
                         </div> 
                     </div>
                 </section>
                 <!-- CARDS -->
                 <section class="mb-3">
                     <div class="row">
                         <!-- SCHEDULE ITEM LOG DATE -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                 <p class="text-plus text-uppercase a-text-bold-brown-two">Schedule item log date</p>
                                 <div>
                                     <p class="a-text-medium-brown-two text-plus text-uppercase">Fecha</p>
                                     <div
                                         class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                         <img src="images/calendario.svg" alt="" class="mr-3">
                                         <input type="text" key="day"
                                             class="edit-schedule-date edit-program-attribute-text schedule-date-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                             placeholder="DD:MM:YY">
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <!-- SCHEDULE ITEM LOG TIME (GMT) -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container h-100 d-flex flex-column justify-content-between">
                                 <p class="text-plus text-uppercase a-text-bold-brown-two pb-4">Schedule item log time
                                     (gmt)</p>
                                 <div>
                                     <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                     <div
                                         class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                         <img src="images/reloj.svg" alt="" class="mr-3">
                                         <input type="text" key="programing"
                                             class="edit-schedule-item-time edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                             placeholder="00:00:00">
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <!-- ESTIMATED SCHEDULE ITEM DURATION -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container d-flex flex-column justify-content-between h-100">
                                 <p class=" text-plus text-uppercase a-text-bold-brown-two">estimated schedule item
                                     duration</p>
                                 <div>
                                     <p class="a-text-medium-brown-two text-plus text-uppercase ">HORA</p>
                                     <div
                                         class="mb-3 text-center edit-rectangle-small-container py-3 d-flex align-items-center justify-content-center">
                                         <img src="images/reloj.svg" alt="" class="mr-3">
                                         <input id="duracion-input" type="text" key="duration"
                                             class="edit-program-duration edit-program-attribute-text time-seconds-input input-basic edit-program-input a-text-bold-warm text-uppercase"
                                             placeholder="00:00:00">
                                     </div>
                                 </div>

                             </div>
                         </div> 
                     </div>
                 </section>
                 <!-- CARDS -->
                 <section class="mb-5">
                     <div class="row">
                         <!-- SCHUDELE ITEM LOG DATE -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container d-flex justify-content-between">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version subbed
                                 </p>
                                 <div class="d-flex">
                                     <input type="radio" id="yes-subbed" value="1"
                                         class="edit-program-switch switch-landing edit-subbed-yes" key="subbed" />
                                     <label for="yes-subbed" id="siestado-landing"
                                         class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                     <input type="radio" id="no-dubbed" value="0" checked
                                         class="edit-program-switch switch-landing switch-table-edit edit-subbed-no"
                                         key="subbed" />
                                     <label for="no-dubbed" id="noestado-landing"
                                         class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                 </div>
                             </div>
                         </div>
                         <!-- SCHEDULE VRSION DUBBLED -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container d-flex justify-content-between">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Schedule version dubbed
                                 </p>
                                 <div class="d-flex">
                                     <input type="radio" id="yes-dubbed" value="1"
                                         class="edit-program-switch switch-landing edit-dubbed-yes" key="dubbed" />
                                     <label for="yes-dubbed" id="siestado-landing"
                                         class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                     <input type="radio" id="no-dubbed" value="0" checked
                                         class="edit-program-switch switch-landing switch-table-edit edit-dubbed-no"
                                         key="dubbed" />
                                     <label for="no-dubbed" id="noestado-landing"
                                         class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                 </div>
                             </div>
                         </div>
                         <!-- AUDIO 5.1 -->
                         <div class="col-4 edit-program-data-container">
                             <div class="edit-data-container d-flex justify-content-between">
                                 <p class="mb-3 text-plus text-uppercase a-text-bold-brown-two">Audio 5.1<br>available
                                 </p>
                                 <div class="d-flex">
                                     <input type="radio" id="yes-audio5" value="1"
                                         class="edit-program-switch switch-landing edit-audio5-yes" key="audio5" />
                                     <label for="yes-audio5" id="siestado-landing"
                                         class="si-estilo cursor-pointer mb-0 switch-label">Sí</label>
                                     <input type="radio" id="no-audio5" value="0" checked
                                         class="edit-program-switch switch-landing switch-table-edit edit-audio5-no"
                                         key="audio5" />
                                     <label for="no-audio5" id="noestado-landing"
                                         class="mb-0 no-estilo cursor-pointer switch-label">No</label>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
             </div>
             <!-- BOTONES -->
             <div class="content">
                 <div class="d-flex justify-content-center">
                     <button
                         class="button-modal-canal-claro m-0 mr-4 btn-grilla a-btn-basic-small text-plus a-text-MBlack">ACEPTAR</button>
                     <button data-dismiss="modal"
                         class="m-0 btn-landing a-btn-basic-small text-plus a-text-bold-teal">CANCELAR</button>
                 </div>
             </div>
         </div>
     </div>
     <!-- CARRUSEL LANDING CANAL CLARO -->