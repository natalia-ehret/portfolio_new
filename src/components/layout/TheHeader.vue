<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 35px;
  position: fixed;
  width: 100%;
  z-index: 100;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  text-transform: uppercase;
  gap: 20px;
}

li a {
  text-decoration: none;
  color: #343a40;
}

li a:hover {
  color: rgb(107, 249, 19);
}

a.router-link-active {
  color: rgb(107, 249, 19);
}
</style>
