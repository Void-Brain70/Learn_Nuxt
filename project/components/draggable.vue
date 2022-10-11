<template>
  <v-app>
    <div>{{view}}</div>
    <div class="item">
      <div class="row">
        <div class="col-3">
          <h3>Task</h3>
          <div class="task">
            <draggable
            class="dragArea list-group"
            :list="view"
            :group="{ name: 'people', pull: 'clone', put: false }"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element,index) in view"
              :key="index"
            >
              {{ element }}
            </div>
          </draggable>
          </div>
          
        </div>

        <div class="col-3">
          <h3>Inprogress</h3>
          <div class="progress">
            <draggable
            class="dragArea list-group"
            :list="list2"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="element in list2"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
          </div>
          
        </div>
        <div class="col-3">
          <h3>Testing</h3>
          <div class="test">
            <draggable
            class="dragArea list-group"
            :list="list3"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="element in list3"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
          </div>
          
        </div>
        <div class="col-3">
          <h3>Done</h3>
          <div class="done">
            <draggable
            class="dragArea list-group"
            :list="list4"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="element in list4"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      list3: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      list4: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
      props:["view"]
    };
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
  },
};
</script>
<style scoped>
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
h3 {
  text-align: center;
  color: #f06292;
}
.task {
  background-color: #43A047;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.progress {
  background-color: #AB47BC;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.test {
  background-color: #1E88E5;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.done {
  background-color: #FB8C00;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
</style>
