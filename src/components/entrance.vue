<template>
<div class="hello">
  <a href="/"><img galt="ma9 logo" src = '../assets/ma9ma9.jpg'></a>
    <h1>Welcome to Your Favorite 마구마구 community site</h1>
    <h3>덱 맞추기</h3>
    <ul>
      <li><router-link to="/deck/batters">타자</router-link></li> 
      <li><router-link to="/deck/pitchers">투수</router-link></li>
      <li><router-link to="/deck/staff">스태프</router-link></li> 
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://ma9.netmarble.net" target="_blank" rel="noopener">마구마구 공식 홈페이지</a></li>
      <li><a href="https://cafe.naver.com/abm" target="_blank" rel="noopener">Abm 네이버 카페</a></li>
      <li><a href="https://gall.dcinside.com/board/lists/?id=ma9" target="_blank" rel="noopener">마구마구 갤러리</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'entrance' ,
  props: {
    msg: String
  },
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
</style>
