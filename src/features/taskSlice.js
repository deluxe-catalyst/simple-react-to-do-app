import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Задача 1',
            description: 'Описание задачи 1',
            date: '11.06.2024',
            columnId: 'to-do'
        },
        {
            id: 2,
            title: 'Задача 2',
            description: 'Описание задачи 2',
            date: '15.07.2024',
            columnId: 'in-process'
        },
        {
            id: 3,
            title: 'Задача 3',
            description: 'Описание задачи 3',
            date: '20.08.2024',
            columnId: 'done'
        },
        {
            id: 4,
            title: 'Задача 4',
            description: 'Описание задачи 4',
            date: '02.05.2024',
            columnId: 'done'
        },
        {
            id: 5,
            title: 'Задача 5',
            description: 'Описание задачи 5',
            date: '02.09.2024',
            columnId: 'to-do'
        },
        {
            id: 6,
            title: 'Задача 6',
            description: 'Описание задачи 6',
            date: '02.09.2025',
            columnId: 'to-do'
        },
        {
            id: 7,
            title: 'Задача 7',
            description: 'Описание задачи 7',
            date: '02.04.2024',
            columnId: 'to-do'
        },
    ],
    handleColumndId: undefined,
    handleTaskId: undefined
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTaskId(state, action) {
            state.handleTaskId = action.payload;
        },
        setColumnId(state, action) {
            state.handleColumndId = action.payload;
        },
        updateTasks(state) {
            if (state.handleTaskId  && state.handleColumndId)  {
                const taskIndex = state.tasks.findIndex(task => task.id === state.handleTaskId);
                state.tasks[taskIndex].columnId = state.handleColumndId;
                const [removedTask] = state.tasks.splice(taskIndex, 1);
                state.tasks.push(removedTask)
    
                state.handleColumndId = undefined;
                state.handleTaskId = undefined;
            }

        }
    }
})

export const { updateTasks, setColumnId, setTaskId} = tasksSlice.actions;
export default tasksSlice.reducer;