export const state  = () => ({
    users:[],
    project: [],
    task: [],
})

export const mutations={
    addSigndata(state,data){
        state.users.push(data);    
    },
    addProject(state,data){
        state.project.push(data)
    },
    addTask(state,data){
        state.task.push(data)
    },
    
}