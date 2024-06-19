import { createSlice } from "@reduxjs/toolkit";
import { ColumnStateInterface } from "@/types/interfaces";

const initialState : ColumnStateInterface = {
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
    reducers: {}
})

export default columnsSlice.reducer;