export interface TaskInterface{
    id:number;
    title:string | undefined;
    description:string;
    date:string;
    columnId: string;
}

export interface ColumnInterface{
    columnTitle:string;
    columnId: string;
}

export interface TaskStateInterface{
    tasks: TaskInterface[];
    handleColumnId?: string;
    handleTaskId?: number;
}

export interface ColumnStateInterface{
    columnsData: ColumnInterface[];
}

export interface RootStateInterface {
    columns: ColumnStateInterface;
    tasks: TaskStateInterface;
  }