<template>
    <h1 class="heading"> <span> ordenar</span> ahora</h1>
<section class="order" id="order">

<h1 class="heading"> <span> ordenar</span> ahora</h1>

<div class="row">

    <div class="image">
        <img src="../assets/order.jpg" alt="">
    </div>

    <form action="">

        <div class="inputBox">
            <input type="text" placeholder="nombre">
            <input type="email" placeholder="email">
        </div>

        <div class="inputBox">
            <input type="number" placeholder="numero">
            <input type="email" placeholder="nombre de la comida">
        </div>

        <textarea placeholder="direccion" name="" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="ordene ahora" class="btn">
    </form>
</div>
</section>
<section class="wave-contenedor website">
        <img src="../assets/contactanos.jpg" alt="">
        <div class="contenedor textos main">
            <h2 class="titulo left">¡contactanos!</h2>
            <p class="parrafo">puedes contactarnos y seguirnos en 
                nuestras redes sociales.</p>
            <a href="" class="cta">Leer Mas</a>
        </div>
    </section>
<!-- order section ends -->

<!-- foot section -->

<section class="footer">

<div class="share">
    <a href="#" class="btn">facebook</a>
    <a href="#" class="btn">whatsapp</a>
    <a href="#" class="btn">instagram</a>
    <a href="#" class="btn">twitter</a>
    <a href="#" class="btn">pinteres</a>
</div>

<h1 class="credit"> creado por: <span> Jader Obando & Jexi Diaz </span></h1>
</section>
</template>

<style>
.order .row{
    padding: 2rem;
    box-shadow: 0.5rem 1rem rgba(0,0,0,.1);
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    border-radius: .5rem;
}

.order .row .image{
    flex: 1 1 30rem;
}

.order .row .image img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: .5rem;

}

.order .row form{
    flex: 1 1 50rem;
    padding: 1rem;
}

.order .row form .inputBox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.order .row form .inputBox input, .order .row form textarea{
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
    border: 1rem solid rgba(0,0,0,.3);
    border-radius: .5rem;
    width: 49%;
}

.order .row form textarea{
    width: 100%;
    resize: none;
    height: 15rem;
}

.order .row form .btn{
    background: none;

}

.order .row form .btn:hover{
    background: var(--red);
}

.footer{
    background: #000;
    text-align: center;
}

.footer .share{
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.footer .credit{
    padding: 2.5rem 1rem;
    color: #fff;
    font-weight: normal;
    font-size: 2rem;
}

.footer .credit span{
    color: var(--red);
}

</style>