// action constants
export const ADD_TODO = '[TODO] ADD_TODO';
export const REMOVE_TODO = '[TODO] REMOVE_TODO';

// action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(public payload: any) { }
};

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(public payload: any) { }
}

