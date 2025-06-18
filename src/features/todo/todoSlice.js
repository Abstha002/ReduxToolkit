import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {
            id:1,
            text:"hello world "
        }
    ]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //in context api we just declare but in redux we defin
        //state=> gives initialstate or gives current state 
        //action=> values needed for method are given by action
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>action.payload!== todo.id)
        },
        updateTodo: (state, action) => {
        const { id, text } = action.payload;
        state.todos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
        );
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer