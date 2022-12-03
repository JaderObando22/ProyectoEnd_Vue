<template>
    <header>
<img class="logo" src="../assets/food-restaurant.png" alt="">
<a href="#" class="logo"><i></i>deliFood</a>

<nav class="navbar">
                <router-link class="nav" to="/home">Home</router-link>
                <router-link class="nav" to="/especialidad">Especialidad</router-link>
                <router-link class="nav" to="/popular">Popular</router-link>
                <router-link class="nav" to="/galerias">Galerias</router-link>
                <router-link class="nav" to="/revicion">Revicion</router-link>
                <router-link class="nav" to="/ordenar">Ordenar</router-link>
                
</nav>

<div class="icons">
    <img class="icon" src="../assets/shopping-cart.png" alt="">
    <img class="icon" src="../assets/add-user.png" alt="">
</div>

</header>
<!-- header section ends -->

<!-- home section starts -->

</template>

<style>

:root{
    --red:#ff3838;
}

*{
    font-family: 'Nunito', sans-serif;
    margin: 0%; padding: 0%;
    box-sizing: border-box;
    outline: none; border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: all .2s linear;
}
*::selection{
    background: var(--red);
    color: #fff;
}
.logo i{
    margin-right: -110%;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}
body{
    background: #f7f7f7;
}

section{
    padding:2rem 9%;
}

.btn{
    display: inline-block;
    padding: .8rem 3rem;
    border: .2rem solid var(--red);
    color: var(--red);
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: .5rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
    margin-top: 1rem;
}

.btn::before{
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 0%;
    height: 100%;
    background: var(--red);
    transition: .3s linear;
    z-index: -1;
}

.btn:hover::before{
    width: 100%;
    left: 0;

}

.btn:hover{
    color: #fff;
}

header{
    position: fixed;
    top:0; left: 0; right:0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding:2rem 9%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}

header .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color: #666;
}
header .logo i{
    padding-right: .5rem;
    color: var(--red);
}
header .navbar a{
    font-size: 2rem;
    margin-left: 2rem;
    color: rgb(15, 10, 10);

}
header .navbar a:hover{
color: var(--red);
cursor: pointer;
text-decoration: underline;
}

#menu-bar{
   font-size: 3rem; 
   cursor: pointer;
   color: #666;
   border:.1rem solid #666;
   border-radius: .3rem;
   padding:.5rem 1.5rem;
   display: none;
}

.icons{
    cursor: pointer;
    padding-left: 20px;
}
.icon{
    padding-left: 20px;
   

}


</style>

    