import { createAction, props } from '@ngrx/store/src/action_creator';

export const invokeBooksApi = createAction(
  '[Books Api] invoke books fetch api'
);
export const booksFetchApiSuccess = createAction(
  '[Books Api] fetch api success',
  props<{allBooks:Books[]}>);
