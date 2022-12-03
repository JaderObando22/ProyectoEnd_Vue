<template>
    <h1 class="heading"> nuestra galeria <span> de comida </span> </h1>
    <section class="gallery" id="gallery">

        <h1 class="heading"> nuestra galeria <span> de comida </span> </h1>

        <div class="box-container">
            <div class="box">
                <img src="../assets/gallery 1.jpg" alt="">
                <div class="content">
                    <h3>Sabrosa comida</h3>
                    <p>no te pierdas de degustar unas alitas con 
                        sus respectiva salsa rosa, ensalada, papitas ect...
                    </p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 2.jpg" alt="">
                <div class="content">
                    <h3>sabrosa comida</h3>
                    <p>una hamburguesa te borra cualquier tristeza, disfrutalas</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 3.jpg" alt="">
                <div class="content">
                    <h3>sabroso postre</h3>
                    <p>no es solo un dulce, es una energia</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 4.jpg" alt="">
                <div class="content">
                    <h3>comida deliciosa</h3>
                    <p>un buen gusto sin perder la dieta es mas 
                        que necesario
                    </p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 5.jpg" alt="">
                <div class="content">
                    <h3>comida deliciosa</h3>
                    <p>unos merecidos tacos no importa el horario, 
                        solo disfrutalos.
                    </p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 6.jpg" alt="">
                <div class="content">
                    <h3>comida deliciosa</h3>
                    <p>dejemos la dieta para el lunes</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 7.jpg" alt="">
                <div class="content">
                    <h3>delicioso postre</h3>
                    <p>un pastel cambia el dia y endulza la vida</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 8.jpg" alt="">
                <div class="content">
                    <h3>deliciosa tentacion</h3>
                    <p>mas frio no puede ser</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
            <div class="box">
                <img src="../assets/gallery 9.jpg" alt="">
                <div class="content">
                    <h3>delicioso postre</h3>
                    <p>unos pastelillos para tus mejores momentos en el pasillo</p>
                    <a href="#" class="btn">ordenar ahora</a>
                </div>
            </div>
        </div>
    </section>
    <section class="wave-contenedor website">
        <img src="../assets/pedidos.jpg" alt="">
        <div class="contenedor textos main">
            <h2 class="titulo left">¡haz tus pedidos ya!</h2>
            <p class="parrafo">una manera facil y rapida de hacer tus 
                pedidos y pagar al instante.</p>
            <a href="" class="cta">ordenar</a>
        </div>
    </section>
</template>

<style>

.heading{
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
    color: #666;
}

.heading span{
    color: var(--red);
}
.gallery .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.gallery .box-container .box {
    height: 25rem;
    flex: 1 1 30rem;
    border: 1rem solid #fff;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
}

.gallery .box-container .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.gallery .box-container .box .content {
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, .9);
    padding: 2rem;
    padding-top: 5rem;
    text-align: center;
}

.gallery .box-container .box .content h3 {
    font-size: 2.5rem;
    color: #333;
}

.gallery .box-container .box .content P {
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;

}

.gallery .box-container .box:hover .content {
    top: 0;
}

.review .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.review .box-container .box {
    text-align: center;
    padding: 2rem;
    border: 1rem solid #fff;
    box-shadow: 0.5rem 1rem rgba(0, 0, 0, .3);
    border-radius: .5rem;
    flex: 1 1 30rem;
    background: #333;
    margin-top: 6rem;
}

.review .box-container .box img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 1rem solid #fff;
    margin-top: -8rem;
    object-fit: cover;
}

.review .box-container .box h3 {
    font-size: 2.5rem;
    color: #fff;
    padding: 5rem 0;
}

.review .box-container .box .start {
    font-size: 2rem;
    color: var(--red);
    padding: .5rem 0;
}

.review .box-container .box h3 {
    font-size: 1.7rem;
    color: #eee;
    padding: 1rem 0;
}

.order .row {
    padding: 2rem;
    box-shadow: 0.5rem 1rem rgba(0, 0, 0, .1);
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-radius: .5rem;
}
</style>

