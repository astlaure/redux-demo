import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export const ADD_PIZZA = '[Products] Add Pizza';
export const REMOVE_PIZZA = '[Products] Remove Pizza';

export class AddPizza implements Action {
  readonly type = ADD_PIZZA;
  constructor(public payload: Pizza) {}
}

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: number) {}
}

export type PizzaActions = AddPizza | RemovePizza;
