<template>
  <v-app>
    <v-row>
      <v-col>
        <h3>Task</h3>
        <div class="task1">
          <draggable
            class="list-group"
            :list="list4"
            group="people"
            @change="log($event, 2)"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list1"
              :key="index"
            >
              {{ element.taskName }}
            </div>
          </draggable>
        </div>
      </v-col>
      <v-col>
        <h3>Inprogress</h3>
        <div class="in">
          <draggable
            class="list-group"
            :list="list4"
            group="people"
            @change="log($event, 2)"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list2"
              :key="index"
            >
              {{ element.taskName }}
            </div>
          </draggable>
        </div>
      </v-col>
      <!-- <v-col>
        <h3>Testing</h3>
        <div class="test1">
          <draggable
            class="list-group"
            :list="list3"
            group="people"
            @change="log($event, 2)"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list3"
              :key="index"
            >
              {{ element.taskName }}
            </div>
          </draggable>
        </div>
      </v-col>
      <v-col>
        <h3>Done</h3>
        <div class="done1">
          <draggable
            class="list-group"
            :list="list4"
            group="people"
            @change="log($event, 2)"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list4"
              :key="index"
            >
              {{ element.taskName }}
            </div>
          </draggable>
        </div>
      </v-col> -->
    </v-row>
  </v-app>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "DragTable",
  props: ["total"],
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      list1: this.total,
      list2: this.total,
      list3: this.total,
      list4: this.total,
    };
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt, id) {
      window.console.log(evt, id);
    },
  },
};
</script>

<style scoped>
.task1 {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.in {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.test1 {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
  height: 100px;
  width: 200px;
}
.done1 {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  height: 100px;
  width: 200px;
}

h3 {
  text-align: center;
  color: #f06292;
}
</style>
