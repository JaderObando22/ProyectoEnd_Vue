<template>
    <section class="home" id="home">

        <div class="content">
            <h3>comida hecha y servida con amor</h3>
            <p>se como el espaguetti, aunque es enredado, siempre esta junto. Asi
                es la familia, parece muy complicado pero siempre estara unida.
            </p>
            <a href="#" class="btn">ordenar ahora</a>
        </div>

        <div class="image">
            <img src="../assets/Hamburger-PNG-Transparent-Image.png" alt="">
        </div>
    </section>

    <section class="wave-contenedor website">
        <img src="" alt="">
        <div class="contenedor textos main">
            <h2 class="titulo left">¡tu decision, tu comida, tu gusto!</h2>
            <p class="parrafo">un buen platillo acompañado de las personas
                correctas le da un toque de sabor y diversion.</p>
            <a href="" class="cta">Leer Mas</a>
        </div>
    </section>

    <section class="wave-contenedor website">
        <img src="../assets/ilustracion 2.jpg" alt="">
        <div class="contenedor textos main">
            <h2 class="titulo left">¡Aprendamos a disfrutar la comida Juntos
                donde sea y con quien sea!</h2>
            <p class="parrafo">un buen platillo acompañado de las personas
                correctas le da un toque de sabor y diversion.</p>
            <a href="" class="cta">Leer Mas</a>
        </div>
    </section>

    <section class="info">
        <div class="contenedor">
            <h2 class="titulo left">¡la comida en familia sabe mejor!</h2>
            <p class="parrafo">y con las buenas amistades mucho mas.</p>

        </div>
    </section>

    <section class="cards contenedor">
        <h2 class="titulo">algunos de Nuestros Servicios</h2>
        <div class="content-cards">
            <article class="card">
                <img src="../assets/burgerPage.png" alt="">
                <h3 class="h3text">hamburguesas</h3>
                <p>ofreciendoles ricas hamburguesas</p>
                <a href="" class="cta">Leer Mas</a>
            </article>
            <article class="card">
                <img src="../assets/chickenPage.png" alt="">
                <h3 class="h3text">pollo frito con papitas</h3>
                <p>una pierna de pollo no caeria nada mal.
                </p>
                <a href="" class="cta">Leer Mas</a>
            </article>
            <article class="card">
                <img src="../assets/postrePage.png" alt="">
                <h3 class="h3text">ricos postres</h3>
                <p>un buen postre con una rica bebida es lo que nececitas.</p>
                <a href="" class="cta">Leer Mas</a>
            </article>
        </div>
    </section>


</template>

<style>
.home {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    min-height: 100vh;
    align-items: center;
    background: url() no-repeat;
    background-size: cover;
    background-position: center;
}

.home .content {
    flex: 1 1 40rem;
    padding-top: 6.5rem;
}

.home .image {
    flex: 1 1 40rem;

}

.home .image img {
    width: 100%;
    padding: 1rem;
    animation: float 3s linear infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0rem);
    }

    50% {
        transform: translateY(3rem);
    }
}

.home .content h3 {
    font-size: 5rem;
    color: #333;
}



.home .content p {
    font-size: 1.7rem;
    color: #666;
    padding: 1rem 0;
}

.contenedor,
.wave-contenedor {
    width: 90%;
    max-width: 1000px;

    overflow: hidden;
    margin: auto;
    padding: 0 0 80px 0;
}

.contenedor {
    padding: 80px 0;

}

.titulo {
    font-weight: 300;
    font-size: 35px;
    text-align: center;
    margin-bottom: 30px;
}

.titulo.left {
    text-align: left;
}

.titulo.right {
    text-align: right;
}

/* section */

.website {
    display: flex;
    justify-content: space-between;

}

.website img {
    width: 48%;
}

.website.contenedor-textos-main {
    width: 40%;
}

.parrafo {
    text-align: justify;
    margin-bottom: 30px;
    font-size: 20px;
}

.cta {
    display: inline-block;
    text-decoration: none;
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0ca 99%, #fad0c4 99%, #fad0ca 100%);
    padding: 20px 50px;
    border-radius: 8px;
    color: white;
   text-rendering: initial;

}

/* Info */

.info {
    background: #f5576c;
    color: #fff;
}

/* Cards */

.content-cards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    text-align: center;
    height: 300px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    transform: scale(1);
    transition: transform 0.6s;
}

.card:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
    transform: scale(1.03);
    cursor: pointer;
}

.card i {
    margin: 30px 0 20px 0;
    color: #cc9199;
    font-size: 50px;
}

.card p {
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 10px;
}
.h3text{
    font-size: 30px;

}

</style>