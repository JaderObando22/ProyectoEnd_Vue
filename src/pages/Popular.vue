<template>
    <h1 class="heading"> comidas <span>mas</span> populares </h1>
   <section class="popular" id="popular">

<h1 class="heading"> comidas <span>mas</span> populares </h1>

<div class="box-container">

    <div class="box">
        <span class="price"> $8 </span>
        <img src="../assets/foot burger 1.jpg" alt="">
        <h3>Sabrosas Hamburguesas Para Degustar</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    <div class="box">
        <span class="price">$30 </span>
        <img src="../assets/foot cakes 2.jpg" alt="">
        <h3>Ricos Pasteles De Todos Los Sabores Y Tamaños Al Gusto Del Cliente</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    <div class="box">
        <span class="price"> $5 </span>
        <img src="../assets/foot sweets 3.jpg" alt="">
        <h3>Sabrosos Dulces Para Endulzar Tu Paladar</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    <div class="box">
        <span class="price"> $7 </span>
        <img src="../assets/foot cupcakes 4.jpg" alt="">
        <h3>Deliciosos Pastelillos Para Degustar Con Tu Respectivo Cafe</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    <div class="box">
        <span class="price"> $20 </span>
        <img src="../assets/foot drinks 5.jpg" alt="">
        <h3>Ricas Bebidas Frias Para Refrescar Tu Dia</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    <div class="box">
        <span class="price"> $15 </span>
        <img src="../assets/foot cream 6.jpg" alt="">
        <h3>Ricos Helados De Diferentes Sabores Y Colores</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <a href="#" class="btn">ordenar ahora</a>
    </div>
    
</div>
</section> 
<section class="steps">

<div class="box">
    <img src="../assets/choose foot.png" alt="">
    <h3>elige tu comida favorita</h3>
</div>
<div class="box">
    <img src="../assets/delibery.png" alt="">
    <h3>entrega gratuita y rapida</h3>
</div>
<div class="box">
    <img src="../assets/payments.png" alt="">
    <h3>metodos de pagos faciles</h3>
</div>
<div class="box">
    <img src="../assets/your food.png" alt="">
    <h3>y finalmente, disfruta de tu comida</h3>
</div>

</section>
</template>

<style>
.popular .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.popular .box-container .box{
    padding: 2rem;
    background: #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border: .1rem solid rgba(0,0,0,.3);
    border-radius: 5rem;
    text-align: center;
    flex: 1 1 30rem;
    position: relative;
}

.popular .box-container .box img{
    height: 25rem;
    object-fit: cover;
    width: 100%;
    border-radius: .5rem;
}

.popular .box-container .box .price{
    position: absolute;
    top: 3rem; left: 3rem;
    background: var(--red);
    font-size: 2rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
}

.popular .box-container .box h3{
    color: #333;
    font-size: 2.5rem;
    padding-top: 1rem;
}

.popular .box-container .box .stars i{
    color: gold;
    font-size: 1.7rem;
    padding:1rem .1rem;
}

.steps{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem;
}

.steps .box{
    flex: 1 1 25rem;
    padding: 2rem;
    text-align: center;
}

.steps .box img{
    border-radius: 45%;
    border: 1rem solid #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}

.steps .box h3{
    font-size: 3rem;
    color: #333;
    padding: 1rem;
}
</style>