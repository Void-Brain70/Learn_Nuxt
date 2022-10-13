<template>
  <div>
    <div class="drag" v-for="(el, index) in task" :key="index">
      <v-card>
        <p>Task Name: {{ el.taskName }}</p>

        <template>
          <div class="text-center">
            <v-dialog v-model="dialog1" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-eye</v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  More Details
                </v-card-title>

                <v-card-text>
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
                <v-icon v-bind="attrs" v-on="on">mdi-pencil</v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  More Details
                </v-card-title>

                <v-card-text>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="editTask()">
                    Edit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

        <template>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Details</v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>Project Name: {{ el.assignProject }}</p>
                <p>Description: {{ el.taskDescription }}</p>
                <p>Assign To: {{ el.assignTask }}</p>
                <p>Level: {{ el.importancy }}</p>
                <p>Start Time: {{ el.startTime }}</p>
                <p>End Time: {{ el.endTime }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <v-icon @click="deleteTask(index)">mdi-delete</v-icon>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  data(){
    return {
      dialog1: false,
      dialog2: false,
    }
  },
  methods: {
    deleteTask(id) {
      this.task.splice(id, 1)
    },
    editTask(){
      this.dialog2 = false    
    },
    closeTask(){
      this.dialog1 = false    
    }
  },
}
</script>

<style scoped>
.drag {
  margin: 10px 0px;
}
</style>
