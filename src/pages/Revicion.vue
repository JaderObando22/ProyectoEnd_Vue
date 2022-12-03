<template>
     <h1 class="heading"> opiniones de <span>nuestros clientes</span></h1>
    <section class="review" id="review">

        <h1 class="heading"> opiniones de <span>nuestros clientes</span></h1>

        <div class="box-container">

            <div class="box">
                <img src="../assets/review 1.jpg" alt="">
                <h3>john martinez</h3>
                <div class="start">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>Como Critico Culinario De La Gastronomia Debo
                     Decir Que Me Encanto La Comida Que Ofrecen Y 
                     De Igual Forma Los Postres Y Susmuchas Variedades. Sigan Asi!</p>
            </div>
            <div class="box">
                <img src="../assets/review 2.jpg" alt="">
                <h3>samanta arana</h3>
                <div class="start">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>Me Encanto La Comida Que Ofrecen, Pero Aparte De Esto Me
                     Encanto La Atencion En La Que Atienden A Los Clientes, 
                     Es Rapida Y Muy Atenta Y De Igual Manera Pude Degustar De Ricos Platillos.</p>
            </div>
            <div class="box">
                <img src="../assets/review 3.jpg" alt="">
                <h3>jimena contreras</h3>
                <div class="start">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>El Servicio Es Excelente, Me Encanton La Atencion, 
                    La Amabilidad En Como Atienden A Sus Clientes, Sus Comidas, 
                    Susbocadillos,Sus Bebidas; Todo Es Excelente.</p>
            </div>
        </div>
    </section>
    <section class="wave-contenedor website">
        <img src="../assets/calificacion.jpg" alt="">
        <div class="contenedor textos main">
            <h2 class="titulo left">¡calificanos!</h2>
            <p class="parrafo">puedes calificar nuestra atencion 
                al cliente y nuestros productos.</p>
            <a href="" class="cta">calificar</a>
        </div>
    </section>
</template>

<style>
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
    border: 1rem solid rgb(241, 93, 8);
    margin-top: -8rem;
    object-fit: cover;
}

.review .box-container .box h3 {
    font-size: 2.5rem;
    color: rgb(240, 95, 11);
    padding: 5rem 0;
}

.review .box-container .box .start {
    font-size: 2rem;
    color: yellow;
    padding: .5rem 0;
}

.review .box-container .box h3 {
    font-size: 1.7rem;
    color: rgb(255, 249, 249);
    padding: 1rem 0;
}
.review .box-container .box p{
    color: #fff;
    font-size: 18px;
}
.heading{
    text-align: center;
    font-size: 3.5rem;
    padding: 1rem;
    color: #666;
    margin-top: 20px;
}

.heading span{
    color: var(--red);
}
</style>