<template>
<div>
    <div id="menu">
        <nav class="d-flex col-xl-11 navbar-expand-sm justify-content-center mb-5 mx-auto" id="option">
            <div class="navbar-progra d-flex align-items-center justify-content-center mt-2">
                <img :src="'./images/arrow-gray.svg'" alt="flecha" class="arrow-progra arrow-progra-left">
                <div class="navbar-progra-item navbar-progra-item-border navbar-programacion   navbar-progra-active navbar-prev-programacion" navbar-index="1" rel="navbar-prev-programacion">
                    <div class="navbar-progra-item-container ml-3 mr-3">
                        <p class="a-text-bold-two py-2 px-3 mb-0">PROGRAMACIÓN</p>
                    </div>
                </div>
                <div class="navbar-progra-item navbar-progra-item-border navbar-sinopsis " navbar-index="2" rel="navbar-prev-sinopsis">
                    <div class="navbar-progra-item-container ml-3 mr-3">
                        <p class=" a-text-bold-two py-2 px-3 mb-0">SINOPSIS</p>
                    </div>
                </div>
                <div class="navbar-progra-item navbar-progra-item-border navbar-canal-claro" navbar-index="3" rel="navbar-prev-canal-claro">
                    <div class="navbar-progra-item-container ml-3 mr-3">
                        <p class="py-2 px-3 mb-0 a-text-bold-two">CANAL CLARO</p>
                    </div>
                </div>
                <div class="navbar-progra-item navbar-prev-home navbar-home" navbar-index="4" rel="navbar-prev-home">
                    <div class="navbar-progra-item-container ml-3 mr-3">
                        <p class=" a-text-bold-two py-2 px-3 mb-0">HOME</p>
                    </div>
                </div>
                <img :src="'./images/arrow-gray.svg'" alt="flecha" class="arrow-progra arrow-progra-right">
            </div>
        </nav>
    </div>
    <div class="d-flex float-right mb-4 pb-2 mr-5">
        <form action="" name="formilariosexo" id="formulariosexo" class="formulario">
            <div class=" d-flex prev text-small a-text-medium-brownish location mt-2">
                <input type="radio" name="sexo" id="edit" checked />
                <label for="edit" id="editar" class="mujer-estilo d-flex align-items-center pl-4 pt-3">
                    <p class=" a-prev-title">EDITAR</p>
                </label>
                <input type="radio" name="sexo" id="prev" />
                <label for="prev" id="previsualiza" class="hombre-estilo pl-2 pt-3">
                    <p class=" a-prev-title ">PREVISUALIZAR</p>
                </label>
            </div>
        </form>
        <div class="pt-2">
            <img :src="'./images/mobile.svg'" class="a-prev-image ml-3 mr-3 op-inac pointer-none" alt="mobile" id="prev-mobile">
            <img :src="'./images/tablet.svg'" class="a-prev-image op-inac pointer-none" alt="tablet" id="prev-tablet">
            <img :src="'./images/pc.svg'" class="a-prev-image ml-3 op-ac cursor-pointer" alt="pc" id="prev-desktop">
        </div>
    </div>
    <div class="float-left ml-5 mb-4 ">
        <div class="d-flex">
            <button class="btn-apro a-text-MBlack text-normal mr-3 gril-claro"><span>Aprobar cambios</span></button>
            <button class="btn-recha a-text-MBlack text-normal lan-claro" id="btn-landing"><span>Rechazar cambios</span></button>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class=" mr-5 d-flex float-right">
        <div class="btn-zona zona"><span class="mr-3">Zona horaria</span><img :src="'images/gmt-icon.svg'" class=" Icon_paises1" width="32px" /></div>
    </div>
    <div class="clearfix"></div>
    <div class="centro">
        <div id="viewIframe"></div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
