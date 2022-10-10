<template>
 <v-app>
    <div>
    <h1>Task Manager</h1>
    <hr />
    <div class="row">
      <div class="col-3">
        <h3>
          Task <v-icon @click="isTask = !isTask" class="btn">mdi-plus</v-icon>
        </h3>
        <div v-if="isTask" class="add">
          <input v-model="taskAdd" type="text" class="form" /><br />
          <button @click="addTask" class="btn1">Add</button>
          <button @click="isTask = !isTask" class="btn1">Close</button>
        </div>
        <div class="task">
          <draggable
            class="list-group"
            :list="list1"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list1"
              :key="element.id"
            >
              <v-card class="mx-auto" max-width="344">
                <v-card-text>
                  <div>
                    <p>Id: {{ element.id }}</p>
                  </div>
                  <div>
                    <p>Name: {{ element.name }}</p>
                  </div>
                  <div>
                    <p>Time: {{ element.time }}</p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <div class="icon">
                    <v-icon @click="deleteTask(index)">mdi-delete</v-icon>
                      
                      <template>
                        <div class="text-center">
                          <v-dialog v-model="dialog1" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="editTask()"
                                >mdi-pencil</v-icon>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Edit Item
                              </v-card-title>

                              <v-card-text>

                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialog1 = false"
                                >
                                  Done
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>
                  
                  </div>
                </v-card-actions>
              </v-card>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <h3>
          Inprogress
          <v-icon @click="isProgress = !isProgress" class="btn"
            >mdi-plus</v-icon
          >
        </h3>
        <div v-if="isProgress" class="add">
          <input v-model="progressAdd" type="text" class="form" /><br />
          <button @click="addProgress" class="btn1">Add</button>
          <button @click="isProgress = !isProgress" class="btn1">Close</button>
        </div>
        <div class="progress">
          <draggable
            class="list-group"
            :list="list2"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list2"
              :key="element.id"
            >
              <v-card class="mx-auto" max-width="344">
                <v-card-text>
                  <div>
                    <p>Id: {{ element.id }}</p>
                  </div>
                  <div>
                    <p>Name: {{ element.name }}</p>
                  </div>
                  <div>
                    <p>Time: {{ element.time }}</p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <div class="icon">
                    <v-icon @click="deleteProgress(index)">mdi-delete</v-icon>
                  
                    <template>
                        <div class="text-center">
                          <v-dialog v-model="dialog2" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="editProgress()"
                                >mdi-pencil</v-icon>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Edit Item
                              </v-card-title>

                              <v-card-text>

                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialog2 = false"
                                >
                                  Done
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>

                  </div>
                </v-card-actions>
              </v-card>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <h3>
          Testing
          <v-icon @click="isTest = !isTest" class="btn">mdi-plus</v-icon>
        </h3>
        <div v-if="isTest" class="add">
          <input v-model="testAdd" type="text" class="form" /><br />
          <button @click="addTest" class="btn1">Add</button>
          <button @click="isTest = !isTest" class="btn1">Close</button>
        </div>
        <div class="test">
          <draggable
            class="list-group"
            :list="list3"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list3"
              :key="element.id"
            >
              <v-card class="mx-auto" max-width="344">
                <v-card-text>
                  <div>
                    <p>Id: {{ element.id }}</p>
                  </div>
                  <div>
                    <p>Name: {{ element.name }}</p>
                  </div>
                  <div>
                    <p>Time: {{ element.time }}</p>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <div class="icon">
                    <v-icon @click="deleteTest(index)">mdi-delete</v-icon>
                
                    <template>
                        <div class="text-center">
                          <v-dialog v-model="dialog3" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="editTest()"
                                >mdi-pencil</v-icon>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Edit Item
                              </v-card-title>

                              <v-card-text>

                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialog3 = false"
                                >
                                  Done
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>

                  </div>
                </v-card-actions>
              </v-card>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <h3>
          Done <v-icon @click="isDone = !isDone" class="btn">mdi-plus</v-icon>
        </h3>
        <div v-if="isDone" class="add">
          <input v-model="doneAdd" type="text" class="form" /><br />
          <button @click="addDone" class="btn1">Add</button>
          <button @click="isDone = !isDone" class="btn1">Close</button>
        </div>
        <div class="done">
          <draggable
            class="list-group"
            :list="list4"
            group="people"
            @change="log"
          >
            <div
              class="list-group-item"
              v-for="(element, index) in list4"
              :key="element.id"
            >
              <v-card class="mx-auto" max-width="344">
                <v-card-text>
                  <div>
                    <p>Id: {{ element.id }}</p>
                  </div>
                  <div>
                    <p>Name: {{ element.name }}</p>
                  </div>
                  <div>
                    <p>Time: {{ element.time }}</p>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <div class="icon">
                    <v-icon @click="deleteDone(index)">mdi-delete</v-icon>
                    
                    <template>
                        <div class="text-center">
                          <v-dialog v-model="dialog4" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                v-bind="attrs"
                                v-on="on"
                                @click="editDone()"
                                >mdi-pencil</v-icon>
                            </template>

                            <v-card>
                              <v-card-title class="text-h5 grey lighten-2">
                                Edit Item
                              </v-card-title>

                              <v-card-text>

                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  text
                                  @click="dialog4 = false"
                                >
                                  Done
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </template>

                  </div>
                </v-card-actions>
              </v-card>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
 </v-app>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'HomePage',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable,
  },
  data() {
    return {
      isTask: false,
      isProgress: false,
      isTest: false,
      isDone: false,
      
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,

      currentId: 4,
      
      taskAdd: '',
      progressAdd: '',
      testAdd: '',
      doneAdd: '',
      list1: [
        {
          name: 'C++',
          id: 1,
          time: '2022-10-08T11:18:58.196Z',
        },
      ],
      list2: [
        {
          name: 'Python',
          id: 2,
          time: '2022-10-08T11:18:58.196Z',
        },
      ],
      list3: [
        {
          name: 'JavaScript',
          id: 3,
          time: '2022-10-08T11:18:58.196Z',
        },
      ],
      list4: [
        {
          name: 'Java',
          id: 4,
          time: '2022-10-08T11:18:58.196Z',
        },
      ],
    }
  },
  methods: {
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned',
      }
    },
    log: function (evt) {
      window.console.log(evt)
    },
    addTask() {
      let date = new Date()
      let curretnTime = JSON.stringify(date)
      let task = {
        name: this.taskAdd,
        id: this.currentId++,
        time: curretnTime,
      }
      this.list1.push(task)
      this.isTask = false
      this.taskAdd = ''
    },
    deleteTask(id) {
      this.list1.splice(id, 1)
      console.log(id, this.list1)
    },
    editTask(){
        this.dialog1 = true;
    },
    addProgress() {
      let date = new Date()
      let curretnTime = JSON.stringify(date)
      let progress = {
        name: this.progressAdd,
        id: this.currentId++,
        time: curretnTime,
      }
      this.list2.push(progress)
      this.isProgress = false
      this.progressAdd = ''
    },
    deleteProgress(id) {
      this.list2.splice(id, 1)
      console.log(id, this.list2)
    },
    editProgress(){
        this.dialog2 = true;
    },
    addTest() {
      let date = new Date()
      let curretnTime = JSON.stringify(date)
      let test = {
        name: this.testAdd,
        id: this.currentId++,
        time: curretnTime,
      }
      this.list3.push(test)
      this.isTest = false
      this.testAdd = ''
    },
    deleteTest(id) {
      this.list3.splice(id, 1)
      console.log(id, this.list3)
    },
    editTest(){
        this.dialog3 = true;
    },
    addDone() {
      let date = new Date()
      let curretnTime = JSON.stringify(date)
      let done = {
        name: this.doneAdd,
        id: this.currentId++,
        time: curretnTime,
      }
      this.list4.push(done)
      this.isDone = false
      this.doneAdd = ''
    },
    deleteDone(id) {
      this.list4.splice(id, 1)
      console.log(id, this.list3)
    },
    editDone(){
        this.dialog4 = true;
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: tomato;
}
h3 {
  text-align: center;
  color: #f06292;
}
.task {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.progress {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.test {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.done {
  background-color: #e3f2fd;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.btn {
  background-color: #1e88e5;
  border-radius: 10px;
}
.form {
  background-color: #e3f2fd;
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 100%;
}
.btn1 {
  background-color: #1e88e5;
  border-radius: 5px;
  height: 30px;
  width: 50%;
  color: beige;
}
.add {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.icon {
  display: flex;
}
</style>
