import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [
    NgIf,
    NgFor
  ]
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
