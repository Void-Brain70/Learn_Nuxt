<template>
  <div>
    <div class="body">
      <div class="select">
        <label for="position"></label>

        <select id="position">
          <option value="Web Developer"><p>Web Developer</p></option>
          <hr />
          <option value="Graphics Designer"><p>Graphics Designer</p></option>
          <hr />
          <option value="Graphics Designer"><p>UI/UX Designer</p></option>
          <hr />
          <option value="Flutter Developer"><p>Flutter Developer</p></option>
          <hr />
          <option value="Web Developer Intern">
            <p>Web Developer Intern</p>
          </option>
          <hr />
        </select>
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
  .select {
    margin: 0px 50px;
    padding: 0px 0px;

    #position {
      background-color: #ffffff;
      height: 50px;
      width: 350px;
      text-decoration: none;
      margin-bottom: 20px;
      border-radius: 8px;
      option {
        text-align: center;
        margin: 10px 0px;
        padding: 20px 0px;
        p {
          font-size: 20px;
          font-family: "Manrope";
          margin: 10px 0px;
          padding: 20px 0px;
        }
      }
    }
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
