import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    columnsData: [
        {
            columnTitle: 'Выполнить',
            columnId: 'to-do',
        },
        {
            columnTitle: 'В процессе',
            columnId: 'in-process',
        },
        {
            columnTitle: 'Готово',
            columnId: 'done',
        }
    ]
}

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
})

export default columnsSlice.reducer;