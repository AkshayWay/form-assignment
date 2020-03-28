import { Component, OnInit } from "@angular/core";
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient
} from "@angular/common/http";
declare var $: any;
@Component({
  selector: "app-create-message",
  templateUrl: "./create-message.component.html",
  styleUrls: ["./create-message.component.css"]
})
export class CreateMessageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  //  confirmationString: string = "New message has beed added succesfully!";
  // isAdded: boolean = false;

  messageObj: object = [];
  ngOnInit(): void {}
  createNewMessage(messages) {
    this.messageObj = {
      name: messages.name,
      email: messages.email,
      phone: messages.phone,
      message: messages.message
    };
    console.log("messages", messages);
    this.http
      // .post("http://localhost:5555/messages/", this.messageObj)
      .post(
        "https://my-json-server.typicode.com/AkshayWay/jsonServer/messages/",
        this.messageObj
      )
      .subscribe((res: Response) => {
        console.log(res);
        // this.isAdded = true;
        $("#exampleModalCenter").modal("show");
      });
  }
}
