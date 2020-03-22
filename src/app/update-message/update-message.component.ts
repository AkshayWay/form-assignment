import { Component, OnInit } from "@angular/core";
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { MessageClass } from "../message-class";
import { unescapeIdentifier } from "@angular/compiler";

@Component({
  selector: "app-update-message",
  templateUrl: "./update-message.component.html",
  styleUrls: ["./update-message.component.css"]
})
export class UpdateMessageComponent implements OnInit {
  constructor(
    // private router: Route,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  id: number;
  data = new MessageClass();
  message: object = [];
  displayData: any;
  public exist = false;
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.http.get("http://localhost:5555/messages").subscribe(data1 => {
      this.displayData = data1;
      for (var i = 0; i < this.displayData.length; i++) {
        if (parseInt(this.displayData[i].id) === this.id) {
          this.data = this.displayData[i];
          this.exist = true;
          break;
        } else {
          this.exist = false;
        }
      }
    });
  }
  updateNewMessage(messages) {
    this.message = {
      name: messages.name,
      email: messages.email,
      phone: messages.phone,
      message: messages.message
    };
    const url = "http://localhost:5555/messages/" + this.id;
    this.http
      .put(url, JSON.stringify(this.message), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(["/"]);
      });
  }
  safertyCheck(property: any) {
    try {
      return property;
    } catch (e) {
      return undefined;
    }
  }
}
