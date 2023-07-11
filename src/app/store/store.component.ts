import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  textColor = 'green';
  buyNow(product:any){
    alert('You have purchased ' + product)
  }
}
