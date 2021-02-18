<template>
    <div>
    <div class="container nav">
    <nav class="navbar navbar-expand-md  navbar-light fixed-top ">
        <a class="navbar-brand" href="#"> <span> web </span>  jet </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
            <ul class="navbar-nav m-auto ">
                <li class="nav-item active mr-5">
                    <a class="nav-link" href="#">Product <span class="sr-only">(current)</span></a>
                </li> <li class="nav-item  mr-5">
                    <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
                </li> <li class="nav-item  mr-5">
                    <a class="nav-link" href="#">About Us <span class="sr-only">(current)</span></a>
                </li> <li class="nav-item  mr-5">

                <a class="nav-link" href="#"><font-awesome-icon icon="dot-circle" /> Live Demo <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <ul class="navbar-nav mr-lg-2 mt-md-0">
                <li class="nav-item">
                    <a class="nav-link mr-3 " href="#">Sign In</a>
                </li>
                <li class="nav-item">
                    <button type="button" class="btn btn-primary">Contact Us</button>
                </li>
            </ul>
        </div>
    </nav>
<!--        <div class="row">-->
<!--            <div class="col-lg-12 ">-->
<!--                <div class="img-nav d-flex justify-content-end"></div>-->
<!--            </div>-->
<!--        </div>-->


    </div>
        <div class="d-flex">

            <div class="ml-auto p-2"><img :src="src"></div>
        </div>
</div>
</template>

<script>


export default {
    data(){
        return{
            src:"./img/header.svg"
        }
    }

}
</script>
