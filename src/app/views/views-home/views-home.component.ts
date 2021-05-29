import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-views-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: "# of users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "Reviews" },
  ];

  items = [
    {
      image: "/assets/images/2-tier-heart-shaped-cake.jpg",
      title: "2 Tier Heart Shaped Cake",
      description: "Engagement Cake",
    },
    {
      image: "/assets/images/peppa-pig-cake.jpg",
      title: "Peppa Pig Cake",
      description: "Peppa Pig Cake",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
