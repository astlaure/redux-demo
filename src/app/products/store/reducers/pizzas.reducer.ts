import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
}

export const INITIAL_STATE: PizzaState = {
  data: [
    {
      name: 'Toto',
      id: 1
    }
  ],
  loaded: false
};

export function reducer(state = INITIAL_STATE, action: fromPizzas.PizzaActions): PizzaState {
  switch (action.type) {
    case fromPizzas.ADD_PIZZA:
      state.data.push(action.payload);
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
}

export const getPizzas = (state: PizzaState) => state.data;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
