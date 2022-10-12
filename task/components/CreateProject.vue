<template>
  <v-app>
    <div class="card">
      <template>
        <v-card-actions>
          <v-btn @click="dialog = true"
            >Create Project
            <v-icon right>mdi-plus-thick</v-icon>
          </v-btn>
        </v-card-actions>
      </template>

      <CreateTask :task="store"></CreateTask>
    </div>

    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Create Project
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="projectName"
                    label="Project Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field
                    v-model="projectDescription"
                    label="Project Description"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="12">
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
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="addProject()" color="primary" text> Create </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </v-app>
</template>

<script>
import projectData from "../static/project.json";
import CreateTask from "./CreateTask.vue";
export default {
  name: "CreateProject",
  data(vm) {
    return {
      dialog: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: vm.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu2: false,
      projectName: "",
      projectDescription: "",
      projectDeadline: "",
      projectId: 3,
      store: projectData,
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
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    addProject() {
      let data = {
        projectId: this.projectId++,
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectDeadline: this.date,
      };
      this.store.push(data);
      this.projectName = "";
      this.projectDescription = "";
      this.projectDeadline = "";
      console.log(data);
    },
  },
  components: { CreateTask },
};
</script>

<style scoped>
.card {
  height: 100px;
  width: 200px;
  padding: 5px;
  margin-left: 50px;
  display: flex;
}
</style>
