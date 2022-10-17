<template>
  <div class="part">
    <div class="part1">
      <div class="Tri">
        <div class="content1">
          <img src="../../assets/career/benefits/money.png" />
          <p>Tri-annual Salary review</p>
        </div>
      </div>

      <div class="Casual">
        <div class="content2">
          <img src="../../assets/career/benefits/leave.png" />
          <p>Casual & Sick Leaves</p>
        </div>
      </div>

      <div class="Times">
        <div class="content3">
          <img src="../../assets/career/benefits/bonus.png" />
          <p>2 Times Yearly Salary Bonus</p>
        </div>
      </div>
    </div>

    <div class="part2">
      <div class="Paternity">
        <div class="content4">
          <img src="../../assets/career/benefits/maternity.png" />
          <p>Paternity & Maternity Leaves</p>
        </div>
      </div>

      <div class="Unlimited">
        <div class="content5">
          <img src="../../assets/career/benefits/nachos.png" />
          <p>Unlimited Snacks & Coffee</p>
        </div>
      </div>

      <div class="Full">
        <div class="content6">
          <img src="../../assets/career/benefits/meal.png" />
          <p>Full Subsidized Lunch</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Benefits",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap");
.part {
  margin: 20px 20px;
  .benefits {
    margin: 30px 0px;
  }
}
.part1 {
  display: flex;
  justify-content: space-evenly;
  .Tri {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  .Casual {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  .Times {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  height: 100%;
  width: 100%;
  padding: 10px 10px;
}
.part2 {
  display: flex;
  justify-content: space-evenly;
  .Paternity {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content4 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  .Unlimited {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content5 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  .Full {
    background-color: #e1f3fa;
    width: 300px;
    height: 180px;
    .content6 {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 0px;
      img {
        height: 60px;
        width: 60px;
      }
      p {
        margin-top: 15px;
        text-align: center;
        color: #404040;
        font-family: "Manrope";
        font-size: 18px;
      }
    }
  }
  height: 100%;
  width: 100%;
  padding: 10px 10px;
}
</style>
