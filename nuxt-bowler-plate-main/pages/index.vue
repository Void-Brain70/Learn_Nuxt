<template>
  <v-app>
    <div>
      <NavBar></NavBar>
    </div>

    <!-- dialog Start -->
    <div class="dialog">
      <!-- Create Project Dialog Start -->
      <div class="card">
        <template>
          <v-card-actions>
            <v-btn @click="dialog1 = true"
              >Create Project
              <v-icon right>mdi-plus-thick</v-icon>
            </v-btn>
          </v-card-actions>
        </template>
      </div>

      <template>
        <div class="text-center">
          <v-dialog v-model="dialog1" width="500">
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
                      v-model="menu1"
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
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="addProject()" color="primary" text>
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- Create Project Dialog End -->

      <!-- create task dialog start -->
      <div class="card">
        <template>
          <v-card-actions>
            <v-btn @click="dialog2 = true"
              >Create Task
              <v-icon right>mdi-plus-thick</v-icon>
            </v-btn>
          </v-card-actions>
        </template>
      </div>

      <template>
        <div class="text-center">
          <v-dialog v-model="dialog2" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Create Task
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="assignProject"
                      :items="findProject"
                      item-text="projectName"
                      label="Project Name"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="taskName"
                      label="Task Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="taskDescription"
                      label="Task Description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="assignTask"
                      :items="person"
                      label="Assign To"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="importancy"
                      :items="level"
                      label="Importancy"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <template>
                      <v-container>
                        <v-row>
                          <v-col cols="12" lg="6">
                            <v-menu
                              ref="menu2"
                              v-model="menu2"
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
                                @input="menu2 = false"
                              ></v-date-picker>
                            </v-menu>
                          </v-col>

                          <v-col cols="12" lg="6">
                            <v-menu
                              v-model="menu3"
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
                                @input="menu3 = false"
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
                <v-btn @click="addTask()" color="primary" text> Create </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- create task dialog end -->
    </div>
    <!-- dialog end -->

    <!-- show info start -->
    <div class="show">
      <!-- project details show start -->
      <div class="showProject">
        <div
          v-for="(el, index) in findProject"
          :key="index"
          class="projectItem"
        >
          <v-card>
            <p>Project Name: {{ el.projectName }}</p>
            <p>Procet Create Time: {{ el.projectDeadline }}</p>
          </v-card>
        </div>
      </div>
      <!-- project details show end -->
      <!-- project details show start -->
      <!-- <div class="showTask">
        <div v-for="(el, index) in findTask" :key="index" class="taskItem">
          <v-card>
            <p>Task Name: {{ el.taskName }}</p>
            <p>Start Time: {{ el.startTime }}</p>
            <p>End Time: {{ el.endTime }}</p>
          </v-card>
        </div>
      </div> -->

      <!-- project details show end -->
    </div>
    <!-- show info end -->
    <div class="drag">
      <v-row>
        <v-col cols="12" md="3">
          <h3>Task</h3>
          <draggable
            style="height: 450px"
            :list="totalTask"
            group="tasks"
            @change="log($event, 1)"
          >
            <ShowTask :task="totalTask"></ShowTask>
          </draggable>
        </v-col>

        <v-col cols="12" md="3">
          <h3>Inprogress</h3>
          <draggable
            style="height: 450px"
            :list="progress"
            group="tasks"
            @change="log($event, 2)"
          >
            <ShowTask :task="progress"></ShowTask>
          </draggable>
        </v-col>

        <v-col cols="12" md="3">
          <h3>Testing</h3>
          <draggable
            style="height: 450px"
            :list="test"
            group="tasks"
            @change="log($event, 3)"
          >
            <ShowTask :task="test"></ShowTask>
          </draggable>
        </v-col>

        <v-col cols="12" md="3">
          <h3>Done</h3>
          <draggable
            style="height: 450px"
            :list="done"
            group="tasks"
            @change="log($event, 4)"
          >
            <ShowTask :task="done"></ShowTask>
          </draggable>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import draggable from 'vuedraggable'
import NavBar from '../components/NavBar.vue'
import ShowTask from '../components/ShowTask.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, ShowTask, draggable },
  data(vm) {
    return {
      dialog1: false,
      dialog2: false,

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: vm.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
      menu3: false,
      projectName: '',
      projectDescription: '',
      projectDeadline: '',
      projectId: 0,
      level: ['High', 'Medium', 'Low'],
      person: ['Anik', 'Nayeem', 'Roman', 'Jahid', 'Partho'],
      taskId: 0,
      taskName: '',
      taskDescription: '',
      assignTask: '',
      startTime: '',
      endTime: '',
      importancy: '',
      assignProject: '',
      removeAddedList: [],
      totalTask: [],
      progress: [],
      test: [],
      done: [],
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    findProject() {
      return this.$store.state.project
    },
    findTask() {
      return this.$store.state.task
    },
  },
  mounted() {
    let myData = JSON.parse(localStorage.getItem('vuex'))
    this.totalTask = myData.task
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    totalTask(val) {
      console.log(val)
    },
    progress(val) {
      console.log(val)
    },
    test(val) {
      console.log(val)
    },
    done(val) {
      console.log(val)
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    addProject() {
      let projectInfo = {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectDeadline: this.date,
        projectId: this.projectId++,
      }
      this.$store.commit('addProject', projectInfo)
      ;(this.projectName = ''),
        (this.projectDeadline = ''),
        (this.projectDescription = ''),
        (this.projectId = ''),
        console.log(projectInfo)
    },
    addTask() {
      let taskInfo = {
        taskName: this.taskName,
        taskDescription: this.taskDescription,
        assignTask: this.assignTask,
        startTime: this.date,
        endTime: this.date,
        importancy: this.importancy,
        assignProject: this.assignProject,
        taskId: (this.taskId = this.taskId + 1),
        stageInfo: [],
        timeInfo: [],
      }
      this.$store.commit('addTask', taskInfo)
      ;(this.taskName = ''),
        (this.taskDescription = ''),
        (this.taskId = ''),
        (this.startTime = ''),
        (this.endTime = ''),
        (this.importancy = ''),
        (this.dialog2 = false),
        console.log(taskInfo)
    },
    log(event, id) {
      if (event.added) {
        if (id === 1) {
          let details = this.totalTask.find(
            (el) => el.taskId === event.added.element.taskId
          )
          details.stageInfo.push({ stage: 'Stage1' })
          console.log(details)
        }

        if (id === 2) {
          let details = this.progress.find(
            (el) => el.taskId === event.added.element.taskId
          )
          details.stageInfo.push({ stage: 'Stage2' })
          console.log(details)
        }

        if (id === 3) {
          let details = this.test.find(
            (el) => el.taskId === event.added.element.taskId
          )
          details.stageInfo.push({ stage: 'Stage3' })
          console.log(details)
        }

        if (id === 4) {
          let details = this.done.find(
            (el) => el.taskId === event.added.element.taskId
          )
          details.stageInfo.push({ stage: 'Stage4' })
          console.log(details)
        }
      }
    },
  },
}
</script>
<style scoped>
.card {
  height: 100px;
  width: 200px;
  padding: 5px;
  margin-left: 50px;
  display: flex;
}
.showProject {
  margin: 0px 10px;
  border-radius: 10px;
}
.showTask {
  margin: 0px 10px;
  height: 400px;
  width: 500px;
  border-radius: 10px;
}
.projectItem {
  margin: 5px 20px;
  background-color: skyblue;
  border-radius: 5px;
}
.taskItem {
  margin: 5px 20px;
  background-color: skyblue;
  border-radius: 5px;
}
.dialog {
  display: flex;
  justify-content: space-between;
}
.show {
  display: flex;
  justify-content: space-between;
}
.drag {
  margin: 0px 10px;
}
h3 {
  text-align: center;
}
</style>
