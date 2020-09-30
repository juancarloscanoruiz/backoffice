<div id="Admin-home-BO">
    <!--Div de cambio-->
    <div class="sombras1 trans10 ">
        <!--Titulos de la tabla-->
        <div class="grid texto-general">
            <header>
                <div class="text-title">Sección</div>
            </header>
            <section class="section">
                <div class="text-title">Acciones</div>
            </section>
            <!--Fin-->
            <!--Contenido de la tabla-->
            <div class="pd-5">PROGRAMACIÓN GENERAL</div>
            <div class="justify-content-center">
                <a href="general-program"><input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus  load-photo" /></a>
                <input type="image" src="./images/historial-inac.svg" alt="" class="ml-3 btn-focus"></input>
                <input type="image" src="./images/noti-inac.svg" alt="" class="ml-3 btn-focus"></input>
            </div>
            <div class="pd-5">PROGRAMACIÓN</div>
            <div class="justify-content-center">
                <a href="{{ route('programacion') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-inac.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-inac.svg" alt="" class="ml-3 btn-focus "></input>
            </div>
            <div class="pd-5 text-sexo">HOME</div>
            <div class="justify-content-center">
                <input type="image" src="./images/lapiz-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>
            <div class="pd-5 ">CANAL CLARO</div>
            <div class="justify-content-center">
                <a href="{{ route('canal-claro') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>
            <div class="pd-5 ">CONCERT CHANNEL</div>
            <div class="justify-content-center">
                <a href="{{ route('concert-channel') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>
            <div class="pd-5 ">CLARO CINEMA</div>
            <div class="justify-content-center">
                <a href="{{ route('claro-cinema') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>
            <div class="pd-5 text-sexo">CLARO SPORTS</div>
            <div class="justify-content-center">
                <input type="image" src="./images/lapiz-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>
            </div>
            <div class="pd-5 text-sexo">NUESTRA VISIÓN</div>
            <div class="justify-content-center">
                <input type="image" src="./images/lapiz-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>
            </div>
            <div class="pd-5 text-sexo">FOOTER</div>
            <div class="justify-content-center">
                <a href="{{ route('footer') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>
            <div class="pd-5">SINÓPSIS</div>
            <div class="justify-content-center">
                <a href="{{ route('sinopsis') }}">
                    <input type="image" src="./images/lapiz-acti.svg" alt="" class="ml-3 btn-focus load-photo"></input>
                </a>
                <input type="image" src="./images/historial-no.svg" alt="" class="ml-3 btn-focus "></input>
                <input type="image" src="./images/noti-no.svg" alt="" class="ml-3 btn-focus "></input>

            </div>

        </div>

    </div>
    <!--Para funcionalidad-->
    <div>
        <ul class="description">
            <li class="posi">
                <input type="image" src="./images/historial-muestra.svg" class="btn-focus "></input>
                <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-histo">Historial</span>
                </div>
            </li>
            <li class="posi">
                <input type="image" src="./images/editar-muestra.svg" class="btn-focus  "></input>
                <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-edit">Editar</span>
                </div>
            </li>
            <li class="posi">
                <input type="image" src="./images/noti-muestra.svg" class="btn-focus "></input>
                <div class="describe"><img src="./images/recuadro1-hover.svg"><span class="text-borra">Borrar</span>
                </div>
            </li>
        </ul>

    </div>