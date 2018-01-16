import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store';
import { Pizza } from '../models/pizza.model';
import * as fromPizza from '../store/actions/pizzas.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }

  addPizza() {
    this.store.dispatch(new fromPizza.AddPizza({
      name: 'Bob',
      id: 2
    }));
  }
}
