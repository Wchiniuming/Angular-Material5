import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  Members = [
    {
      id: 1,
      name: 'weicy'
    },
    {
      id: 2,
      name: 'duwei'
    },
    {
      id: 3,
      name: 'xukj'
    },
    {
      id: 4,
      name: 'chenxm'
    },
    {
      id: 5,
      name: 'panmr'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUserName(User: {id: string; name: string}) {
    return User ? User.name : '';
  }

}
