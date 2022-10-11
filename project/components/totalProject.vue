<template>
  <v-app>
    <div class="project">
      <v-row>
        <v-col>
          <template>
            <v-card class="mx-auto" max-width="400">
              <v-card-text>
                <div>
                  <h3>Total Project: {{ project.length }}</h3>
                </div>
                <div class="total">
                  <template>
                    <v-card
                      class="mx-auto"
                      max-width="400"
                      v-for="(item, index) in project"
                      :key="index"
                    >
                      <v-card-text>
                        <div>
                          <h4>Id: {{ item.id }}</h4>
                        </div>
                        <div>
                          <h4>Project Name: {{ item.name }}</h4>
                        </div>
                        <div>
                          <h4>Assign To: {{ item.assign }}</h4>
                        </div>
                        <div>
                          <h4>Deadline: {{ item.deadline }}</h4>
                        </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-icon @click="deleteProject(index)"
                          >mdi-close-circle</v-icon
                        >
                        <v-btn
                          text
                          color="deep-purple accent-4"
                          @click="dialog = true"
                        >
                          Add Task
                        </v-btn>
                        <template>
                          <div class="text-center">
                            <v-dialog v-model="dialog" width="500">
                              <!-- <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              text
                              color="deep-purple accent-4"
                              @click="addTask()"
                            >
                              Add Task
                            </v-btn>
                          </template> -->

                              <v-card>
                                <v-card-title class="text-h5 grey lighten-2">
                                  Add Task
                                </v-card-title>

                                <v-card-text>
                                  <v-form>
                                    <v-container>
                                      <v-row>
                                        <v-col cols="12" sm="6" md="12">
                                          <v-text-field
                                            v-model="taskname"
                                            label="Task Name"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                          <v-text-field
                                            v-model="taskdescription"
                                            label="Task Description"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                          <v-text-field
                                            v-model="assigntask"
                                            label="Assign To"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                          <v-text-field
                                            v-model="taskdeadline"
                                            label="Deadline"
                                          ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                          <v-select
                                            :items="items"
                                            label="Importancy"
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-container>
                                  </v-form>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    text
                                    @click="addTask()"
                                  >
                                    Done
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </template>
                      </v-card-actions>
                    </v-card>
                  </template>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-col>

        <v-col>
          <ViewTask :task="taskdata"></ViewTask>
        </v-col>
      </v-row>
    </div>
    <Draggable :view="taskdata" ></Draggable>
  </v-app>
</template>

<script>
import taskJson from "../static/task.json";
import ViewTask from "./ViewTask.vue";
import Task from "../pages/task.vue";
import Draggable from "./draggable.vue";
export default {
  name: "totalPrpject",
  props: ["project"],
  data() {
    return {
      dialog: false,
      items: ["High", "Medium", "Low"],
      taskname: "",
      taskdescription: "",
      assigntask: "",
      taskdeadline: "",
      taskid: 3,
      taskdata: taskJson,
    };
  },
  methods: {
    deleteProject(id) {
      this.project.splice(id, 1);
    },
    addTask() {
      var asiaDhaka = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" });
      var todaytask = new Date(asiaDhaka);
      this.dialog = false;
      let tasklist = {
        taskid: this.taskId++,
        taskname: this.taskname,
        taskdescription: this.taskdescription,
        assigntask: this.assigntask,
        taskdeadline: todaytask,
      };
      this.taskdata.push(tasklist);
      this.taskname = "";
      this.taskdescription = "";
      this.assigntask = "";
      this.taskdeadline = "";
      console.log("tasklist");
    },
  },
  components: { ViewTask, Task, Draggable },
};
</script>

<style scoped>
.total {
  padding: 5px;
}
.task {
  margin-top: 20px;
}
.project{
  display: flex;
  justify-content: space-evenly;
}
</style>
