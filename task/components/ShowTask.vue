<template>
  <div>
    <h3 style="color: blue; text-align: center">{{ stage.name }}</h3>
    <draggable
      group="todo"
      style="height: 450px"
      :list="findTask"
      @change="log"
    >
      <div class="drag" v-for="(el, index) in findTask" :key="index">
        <v-card>
          <div class="tName">
            <p id="tname">Task Name: {{ el.taskName }}</p>
          </div>

          <template>
            <div class="text-center">
              <v-dialog v-model="dialog1" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" @click="openTask(index)"
                    >mdi-eye</v-icon
                  >
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    More Details
                  </v-card-title>

                  <v-card-text>
                    <div>
                      <v-data-table
                        :headers="headers"
                        :items="detailsTask.stageInfo"
                        class="elevation-1"
                      ></v-data-table>
                    </div>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="closeTask()">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>

          <template>
            <div class="text-center">
              <v-dialog v-model="dialog2" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" @click="openEditModal(el.taskId)"
                    >mdi-pencil</v-icon
                  >
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Edit Task
                  </v-card-title>

                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="editData.taskName"
                          label="Task Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="editData.taskDescription"
                          label="Task Description"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-select
                          v-model="editData.assignTask"
                          :items="users"
                          item-text="name"
                          label="Assign To"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="12">
                        <v-select
                          v-model="editData.importancy"
                          :items="level"
                          label="Importancy"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="editTask(editData)">
                      Edit
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>

          <template>
            <div class="expansion">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Details</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>Project Name: {{ el.assignProject }}</p>
                    <p>Description: {{ el.taskDescription }}</p>
                    <p>Assign To: {{ el.assignTask }}</p>
                    <p>Level: {{ el.importancy }}</p>
                    <p>Task Create Date: {{ el.startTime }}</p>
                    <p>Deadline: {{ el.endTime }}</p>
                    <p>
                      Total Work Time: {{ el.totalWorkTime_hour }}h
                      {{ el.totalWorkTime_min }}m
                    </p>

                    <v-form>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="hh"
                              label="HH"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="mm"
                              label="MM"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-btn text @click="addTime(el.taskId)">
                            submit
                          </v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </template>

          <v-icon @click="deleteTask(el.taskId)">mdi-delete</v-icon>
        </v-card>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  props: ["stage"],
  data() {
    return {
      hh: "",
      mm: "",
      level: ["High", "Medium", "Low"],
      detailsTask: {},
      dialog1: false,
      dialog2: false,
      findTask: [],
      allTask: [],
      editData: {},
      headers: [
        {
          text: "Developer Name",
          align: "start",
          sortable: false,
          value: "changeBy",
        },
        { text: "Form", align: "start", sortable: false, value: "fromStage" },
        { text: "To", align: "start", sortable: false, value: "toStage" },
        {
          text: "Duretion",
          align: "start",
          sortable: false,
          value: "duration",
        },
      ],
    };
  },
  watch: {
    dialog2(nv) {
      this.editData = { ...this.$store.state.editData };
    },
  },
  mounted() {
    this.showTask();
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    showTask() {
      this.allTask = [...this.$store.state.task];
      this.findTask = this.allTask.filter(
        (task) => task.stage == this.stage.name
      );
    },
    deleteTask(id) {
      this.$store.commit("deleteTask", id);
      this.showTask();
    },
    editTask(data) {
      this.$store.commit("editTask", data);
      this.showTask();
      this.dialog2 = false;
    },
    closeTask() {
      this.dialog1 = false;
    },
    openTask(i) {
      this.detailsTask = this.findTask[i];
      this.dialog1 = true;
    },
    openEditModal(id) {
      this.$store.commit("setEditData", id);
      this.dialog2 = true;
      console.log(this.editData);
    },
    addTime(id) {
      this.$store.commit("addTime", { id: id, h: this.hh, m: this.mm });
      this.hh = "";
      this.mm = "";
    },
    log(evt) {
      if (evt.added) {
        this.$store.commit("log", {
          data: evt.added.element,
          stage: this.stage.name,
          user: this.user.name,
        });
        this.showTask();
      }
    },
  },
};
</script>

<style scoped>
.drag {
  margin: 10px 0px;
}
#tname {
  text-align: center;
  margin-top: 5px;
}
.tName {
  margin-top: 5px;
}
.expansion {
  background-color: aqua;
}
</style>
