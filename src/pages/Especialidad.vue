<template>
     <h1 class="heading">Nuestra <span>especialidad</span></h1>
    <section class="speciality" id="speciality">

        <h1 class="heading">Nuestra <span>especialidad</span></h1>

        <div class="box-container">

            <div class="box">
                <img class="image" src="../assets/fot hambur.jpg" alt="">
                <div class="content">
                    <img src="../assets/burger (1).png" alt="">
                    <h3>hambuerguesas</h3>
                    <p>Todo lo que nececitas para ser feliz 
                        es comerte una hamurguesa.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="../assets/fot2 pizza.jpg" alt="">
                <div class="content">
                    <img src="../assets/pizza.png" alt="">
                    <h3>pizza</h3>
                    <p>Un queso que sederrita en tu boca 
                        y una salsa para chuparte los dedos.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="../assets/fot 3 helado.jpg" alt="">
                <div class="content">
                    <img src="../assets/ice-cream-cup.png" alt="">
                    <h3>helados</h3>
                    <p>Salgo a correr cuando tengo que hacerlo, cuando 
                        el camion de los helados hace setenta.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="../assets/fot 4 bebidas.jpg" alt="">
                <div class="content">
                    <img src="../assets/cocktail.png" alt="">
                    <h3>bebidas frias</h3>
                    <p>Solo se vive una vez, asi que tomate una...</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="../assets/fot 5 pastel.jpg" alt="">
                <div class="content">
                    <img src="../assets/cake.png" alt="">
                    <h3>pasteles</h3>
                    <p>La risa es como el postre, para siempre 
                        hay un hueco.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="../assets/fot 6 desayuno.jpg" alt="">
                <div class="content">
                    <img src="../assets/breakfast.png" alt="">
                    <h3>desayuno</h3>
                    <p>Deja que tu desayuno recargue tu sonrisa, caliente tu 
                        corazon e ilumine tu dia.</p>
                </div>
            </div>

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
.speciality .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.speciality .box-container .box{
    flex: 1 1 30rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border: 1rem solid rgba(0,0,0,.3);
    cursor: pointer;
    border-radius: .5rem;
}

.speciality .box-container .box .image{
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: -100%; left: 0;
}

.speciality .box-container .box .content{
    text-align: center;
    background: #fff;
    padding: 2rem;
}

.speciality .box-container .box .content img{
    margin: 1.5rem 0;
}

.speciality .box-container .box .content h3{
    font-size: 2.5rem;
    color: #333;
}

.speciality .box-container .box .content p{
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
}

.speciality .box-container .box:hover .image{
    top: 0;
}

.speciality .box-container .box:hover .content{
    transform: translateY(100%);
}
</style>
