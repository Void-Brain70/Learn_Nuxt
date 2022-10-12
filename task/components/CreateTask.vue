<template>
  <v-app>
    <div class="card">
      <template>
        <v-card-actions>
          <v-btn @click="dialog = true"
            >Create Task
            <v-icon right>mdi-plus-thick</v-icon>
          </v-btn>
        </v-card-actions>
      </template>
    </div>

    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Create Task
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-select
                   v-model="projectName"
                    :items="task"
                    item-text="projectName"
                    label="Project Name"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field v-model="taskName" label="Task Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field v-model="taskDescription" label="Task Description"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-select v-model="assignTask" :items="person" label="Assign To"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-select v-model="importancy" :items="level" label="Importancy"></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <template>
                    <v-container>
                      <v-row>
                        <v-col cols="12" lg="6">
                          <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="dateFormatted"
                                label="Start Time"
                                persistent-hint
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              no-title
                              @input="menu1 = false"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>

                        <v-col cols="12" lg="6">
                          <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="computedDateFormatted"
                                label="End Time"
                                persistent-hint
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              no-title
                              @input="menu2 = false"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-row>
                    </v-container>
                  </template>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  @click="addTask()" color="primary" text>
                Create
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>


     <DargTable  :total="storetask" ></DargTable>

  </v-app>
</template>

<script>
import taskData from "../static/task.json"
import DargTable from "./DargTable.vue"
export default {
    name: "CreateProject",
    props: ["task"],
    data(vm) {
        return {
            dialog: false,
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            dateFormatted: vm.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)),
            menu1: false,
            menu2: false,
            level: ["High", "Medium", "Low"],
            person: ["Anik", "Nayeem", "Roman", "Jahid", "Partho"],
            taskId: 3,
            taskName: "",
            taskDescription: "",
            assignTask: "",
            startTime: "",
            endTime: "",
            storetask: taskData,
            importancy: "",
            projectName: ""
        };
    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        },
    },
    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        },
    },
    methods: {
        formatDate(date) {
            if (!date)
                return null;
            const [year, month, day] = date.split("-");
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date)
                return null;
            const [month, day, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        },
        addTask() {
            let task = {
                taskId: this.taskId++,
                taskName: this.taskName,
                taskDescription: this.taskDescription,
                startTime: this.date,
                endTime: this.date,
                assignTask: this.person,
                importancy: this.level,
                projectName: this.task,
            };
            this.storetask.push(task);
            this.taskName = "";
            this.taskDescription = "";
            this.startTime = "";
            this.endTime = "";
            this.importancy = "";
            this.assignTask = "";
            this.projectName = "";
            console.log(task);
        },
    },
    components: { DargTable }
};
</script>

<style scoped>
.card {
  height: 100px;
  width: 200px;
  padding: 20px 10px;
  margin-left: 50px;
}
</style>
