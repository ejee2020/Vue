<template>
<header>
    <nav>
        <div class = "menu-item"><a href = "/">Home</a></div>
        <div class = "menu-item"><a href = "#">About</a></div>
        <div class = "menu-item"><a href = "#">Contacts</a></div>
    </nav>
</header>

</template>
<script>
export default {
  name: 'navbar',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

header {
    width: 100vw;
    background-color: #222;
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
}
 
nav .menu-item{
    color: #FFF;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

nav .menu-item.active, 
nav .menu-item:hover {
    background-color: #444; 
    border-bottom-color: #FF5858; 
}
</style>
