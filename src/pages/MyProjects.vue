<template>
<section>
<header class="projects-header">
    <nav>
        <ul>
            <li><router-link to="/projects/photo">Photo</router-link></li>
            <li><router-link to="/projects/video">Video</router-link></li>
        </ul>
    </nav>
</header>
 <router-view></router-view>
</section>
</template>

<script>

export default {
  
  };
</script>

<style scoped>
section {
    position: relative;
}
header {
    position: fixed;
    width:100%;
    margin-top:35px;

}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    text-transform: uppercase;
}

li {
    list-style-type: none;
}

li a {
  text-decoration: none;
  color: black;
}
/* tests */
li a:hover {
  color: rgb(107, 249, 19);
}

a.router-link-active {
  color: rgb(107, 249, 19);
}
</style>
