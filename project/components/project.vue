<template>
  <v-app>
    <div class="project">
      <v-row>
        <v-col>
            <template>
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <div>Create Project</div>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="name"
                      label="Project Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="description"
                      label="Project Description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="assign"
                      label="Assign To"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="deadline"
                      label="Deadline"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="addProject()"
              >Create</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
        </v-col>

        <v-col>

    <TotalProject  :project="store"></TotalProject>

        </v-col>
      </v-row>  
      
    </div>


  </v-app>
</template>

<script>
import jsonData from "../static/data.json";
export default {
  name: "project",
  data() {
    return {
      name: "",
      description: "",
      assign: "",
      deadline: "",
      currentId: 3,
      store: jsonData,
    };
  },
  methods: {
    addProject() {
      var asiaDhaka = new Date().toLocaleString([], { timeZone: "Asia/Dhaka" });
      var today = new Date(asiaDhaka);
      let data = {
        id: this.currentId++,
        name: this.name,
        description: this.description,
        assign: this.assign,
        deadline: today,

      };
      this.store.push(data);
      this.name = "";
      this.description = "";
      this.assign = "";
      this.deadline = "";
      console.log(data);
    },
  },
};
</script>

<style scoped>
.project {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
}
</style>
