import { createSlice } from "@reduxjs/toolkit";
import { TaskStateInterface } from "@/types/interfaces";

const initialState : TaskStateInterface = {
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
            columnId: 'to-do'
        },
        {
            id: 4,
            title: 'Задача 4',
            description: 'Описание задачи 4',
            date: '02.05.2024',
            columnId: 'in-process'
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
            columnId: 'in-process'
        },
    ],
    handleColumnId: undefined,
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
            state.handleColumnId = action.payload;
        },
        updateTasks(state) {
            if (state.handleTaskId  && state.handleColumnId)  {
                const updatedTasks = [...state.tasks];
                const taskIndex = updatedTasks.findIndex(task => task.id === state.handleTaskId);
                updatedTasks[taskIndex].columnId = state.handleColumnId;
                const [removedTask] = updatedTasks.splice(taskIndex,  1);
                updatedTasks.push(removedTask);
                
                state.tasks  = updatedTasks;
                state.handleColumnId = undefined;
                state.handleTaskId = undefined;
            }

        }
    }
})

export const { updateTasks, setColumnId, setTaskId} = tasksSlice.actions;
export default tasksSlice.reducer;