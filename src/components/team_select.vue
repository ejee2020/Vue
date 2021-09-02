<template>
<p>{{title}}</p>
<form v-on:submit.prevent = "search">
  <ul>
  <li><label for="league">리그 :</label></li>
  <select v-model = "league" name="league" id="league">
    <option value="KBO">KBO</option>
    <option value="MLB AL">MLB AL</option>
    <option value="MLB NL">MLB NL</option>
  </select>
  <li><label for="team">팀 :</label></li>
  <select v-if = "league == 'MLB AL'" v-model = "team" name="team" id="team" ref = "team">
    <option :key="team" :value="team" v-for="team in al">{{team.team }}</option>
  </select>
  <select v-else-if = "league == 'MLB NL'" v-model = "team" name="team1" id="team1">
    <option :key="team" :value="team" v-for="team in nl">{{team.team }}</option>
  </select>
  <select v-else v-model = "team" name="team" id="team">
    <option :key="team" :value="team" v-for="team in kbo">{{team.team }}</option>
  </select>
  <li><label for="year">년도 :</label></li>
  <select v-model = "year" name="year" id="year">
    <option :value="team.start">{{team.start}}</option>
    <option :value = "team.start + n" :key = "n" v-for="n in team.years">{{team.start + n}}</option> 
  </select>
  </ul>
  <br><br>
  <input type="submit" value="Submit">
</form>
</template>
<script>
import KBO from "../assets/KBO.js"
import NL from "../assets/NL.js"
import AL from "../assets/AL.js"
export default {
    name: 'team_select',
    props:['title'],
  methods: {
    search(){
      console.log(this.title)
      console.log(this.team.id)
      console.log(this.year)
      if (this.title == "Batters"){
        console.log(this.team)
        this.$router.push({name:'batters2', params:{team:this.team.id, year:this.year, team2: this.team}});
      } else if (this.title == "Pitchers"){
        this.$router.push({name:"pitchers2", params:{team:this.team.id, year:this.year, team2: this.team}});
      } else {
        this.$router.push({name:"staff2", params:{team:this.team.id, year:this.year, team2: this.team}});
      }
      
    }
  }, 
  data() {
    return {
    league: "",
    team: "",
    kbo: KBO,
    nl: NL,
    al: AL,
    }
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
</style>
