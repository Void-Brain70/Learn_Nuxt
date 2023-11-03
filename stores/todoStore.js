import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore',{
    state: () => ({
        todos:[
            { id:1, title: 'Pinia', isFav: false },
            { id:2, title: 'VueX', isFav: true }
        ]
    }),
    getters: {
        favourite: (state) => {
            return state.todos.filter(el => el.isFav)
        },
        favouriteCount: (state)=>{
            return state.todos.reduce((item , i) => {
                return i.isFav ? item +1 : item
            }, 0)
        },
        totalCount: (state)=>{
            return state.todos.length
        }
    },
    actions: {
        addTodo(todo) {
          this.todos.push(todo)
        },
        deleteTodo(id){
           this.todos = this.todos.filter(el =>{
               return el.id !== id
           })
        },
        toggleFavourite(id) {
            const favTodo = this.todos.find(el => el.id === id)
            favTodo.isFav = !favTodo.isFav
        }
    }
})