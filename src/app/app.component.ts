import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .number-container {
        width: 100px;
      }
    `,
  ],
})
//--------------------StoreClass---------------------
export class AppComponent implements OnInit {
  products: object;
  items: number;

  constructor(private http: HttpClient) {
    this.items = 0;
  }

  ngOnInit(): void {
    this.http.get<Object>("../assets/data.json").subscribe((data) => {
      this.products = data;
    });
  }

  increaseCart() {
    if (this.items > 0) {
      return this.items--;
    }
  }

  decreaseCart() {
    return this.items++;
  }
}
