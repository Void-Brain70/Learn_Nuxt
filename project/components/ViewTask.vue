<template>
  <v-app>
    <div>
      <template>
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>
              <h3>Task: {{ task.length }}</h3>
            </div>
            <template>
              <v-card
                class="mx-auto"
                max-width="400"
                v-for="(el, index) in task"
                :key="index"
              >
                <v-card-text>
                  <div>
                    <h3>Id: {{ el.taskid }}</h3>
                  </div>
                  <div>
                    <h3>Task Name: {{ el.taskname }}</h3>
                  </div>
                  <div>
                    <h3>Assign Task: {{ el.assigntask }}</h3>
                  </div>
                  <div>
                    <h3>Deadline: {{ el.taskdeadline }}</h3>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-icon @click="deleteTask(index)">mdi-close-circle</v-icon>
                  <v-icon @click="dialog = true">mdi-eye</v-icon>
                  <template>
                    <div class="text-center">
                      <v-dialog v-model="dialog" width="500">
                        <v-card>
                          <v-card-title class="text-h5 grey lighten-2">
                            Task Details
                          </v-card-title>

                          <p>Description:  {{el.taskdescription}}</p>

                          <v-divider></v-divider>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text @click="dialog = false">
                              Close
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </template>
                </v-card-actions>
              </v-card>
            </template>
          </v-card-text>
        </v-card>
      </template>
    </div>
  </v-app>
</template>

<script>
import Draggable from './draggable.vue';
export default {
    name: "ViewTask",
    props: ["task"],
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        deleteTask(taskid) {
            this.task.splice(taskid, 1);
        },
        details() {
            console.log("details");
        },
    },
    components: { Draggable }
};
</script>
