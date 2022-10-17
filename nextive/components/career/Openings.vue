<template>
  <div>
    <div class="body">
        <div class="select" >
           
        <v-row align="center" md-10 >
          <v-col class="d-flex" cols="10" sm="4">
            <v-select :items="items" label="Web Developer" solo></v-select>
          </v-col>
        </v-row>
   
        </div>
      <div class="filed1">
        <div class="text1">
          <p>Front End Developer</p>
          <p>Vacancy: 01</p>
          <p>Deadline: july 25, 2022</p>
          <a href="#">Apply Now</a>
        </div>
      </div>
      <div class="filed2">
        <div class="text2">
          <p>Front End Developer</p>
          <p>Vacancy: 01</p>
          <p>Deadline: july 25, 2022</p>
          <a href="#">Apply Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Openings",
  data() {
    return {
      items: ["Web Developer"],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");
.body {
  height: 100%;
  width: 100%;
  background-color: #39addf26;
  padding: 120px 0px;
  .select{
    margin: 0px 50px;
    padding: 0px 0px;
  }
  .filed1 {
    background-color: #ffffff;
    padding: 10px 0px;
    margin: 20px 50px;
    border-radius: 10px;
    .text1 {
      display: flex;
      justify-content: space-around;
      a {
        text-decoration: none;
        font-size: 20px;
        color: skyblue;
        font-family: "Manrope";
      }
      p {
        font-size: 20px;
        font-family: "Manrope";
      }
    }
  }
  .filed2 {
    border-radius: 10px;
    background-color: #ffffff;
    padding: 10px 0px;
    margin: 20px 50px;
    .text2 {
      display: flex;
      justify-content: space-around;
      a {
        text-decoration: none;
        font-size: 20px;
        color: skyblue;
        font-family: "Manrope";
      }
      p {
        font-size: 20px;
        font-family: "Manrope";
      }
    }
  }
}
</style>
