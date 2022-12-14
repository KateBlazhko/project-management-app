import { TasksByColumnsType } from 'components/Board/model';
import { Board, BodyForBoard, BodyForTask, ColumnType, TaskType, UserInfo } from 'types/types';
import { store } from './appStore';

export type BoardStateType = {
  columns: ColumnType[];
  tasks: TaskType[];
  taskByColumns: TasksByColumnsType | null;
  titleBoard: string;
  isLoading: boolean;
  searchValue: string;
  foundedTasks: TaskType[];
};

export type MainStateType = {
  boards: Board[];
  isLoading: boolean;
};

export type GetBoardArgsType = {
  token: string;
};

export type GetBoardDataArgsType = {
  token: string;
  idBoard: string;
};

export type SetColumnsDataArgsType = {
  token: string;
  idBoard: string;
  title: string;
  order: number;
};

export type GetSearchingTasksArgsType = {
  token: string;
  searchValue: string;
};

export type CreateBoardArgsType = {
  token: string;
  body: BodyForBoard;
};

export type DeleteBoardArgsType = {
  token: string;
  idBoard: string;
};

export type EditBoardArgsType = {
  token: string;
  idBoard: string;
  body: BodyForBoard;
};

export type CreateTaskArgsType = {
  token: string;
  idBoard: string;
  idColumn: string;
  body: BodyForTask;
};

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthReducer = {
  id: string | null;
  login: string | null;
  token: string | null;
  user: UserInfo | null;
  date: number | null;
};

export type GetUserNameArgsType = {
  token: string | null;
  idUser: string | null;
};
