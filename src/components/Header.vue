
<template>
    <!-- header section strats -->
    <header class="header_section bg-dark">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                    <span>
                        Finexo
                    </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active">
                            <router-link :to="{ name: `Home` }" class="nav-link">Home <span
                                    class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: `About` }" class="nav-link"> About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: `Service` }">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: `WhyUs` }">Why Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: `Team` }">Team</router-link>
                        </li>

                        <form class="form-inline">
                            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- end header section -->
</template>

<script>
export default {

}
</script>

<style></style>