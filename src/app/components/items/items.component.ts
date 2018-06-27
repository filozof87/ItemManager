import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  // tslint:disable-next-line:no-inferrable-types
  editState: boolean = false;
  itemToEdit: Item;

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
     // console.log(items);
     this.items = items;
    } ); }

  deleteItem(event, item: Item) {
      this.clearStatte();
      this.itemService.deleteItem(item);
    }

  editItem(event, item: Item) {
  this.editState = true;
  this.itemToEdit = item;
}

updateItem(item: Item) {
this.itemService.updateItem(item);
this.clearStatte();
}

  clearStatte() {
this.editState = false;
this.itemToEdit = null;
}
  }
