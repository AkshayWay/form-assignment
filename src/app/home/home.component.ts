import { Component, OnInit } from "@angular/core";
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
// import { Http, Response } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  displayData: any;
  id: number;
  public selectedId: number;
  public showTd = true;
  public viewMessage = true;
  public chkPreviousID: number;
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  fetchData() {
    this.http
      // .get("http://localhost:5555/messages")
      .get("https://my-json-server.typicode.com/AkshayWay/jsonServer/messages/")
      //.subscribe((res: Response) => console.log(res.json()));
      .subscribe(data => {
        console.log("data", data), (this.displayData = data);
      });
  }
  deleteMessage(deleteId) {
    if (confirm("Are you sure?")) {
      // const url = `$("http://localhost:5555/messages"}/${deleteId}}`;
      // const url = "http://localhost:5555/messages/" + deleteId;
      const url =
        "https://my-json-server.typicode.com/AkshayWay/jsonServer/messages/" +
        deleteId;
      console.log(url);
      return this.http
        .delete(url, { headers: this.headers })
        .toPromise()
        .then(() => {
          this.fetchData();
        });
    }
  }
  ngOnInit() {
    this.fetchData();
  }
  hideMessage() {
    this.viewMessage = true;
    this.selectedId = undefined;
  }
  toggleTd(id) {
    this.chkPreviousID = this.selectedId;
    if (this.chkPreviousID == id) {
      this.selectedId = undefined;
    } else {
      this.selectedId = id;
    }
    this.viewMessage = false;
    this.showTd = !this.showTd;
  }
}
