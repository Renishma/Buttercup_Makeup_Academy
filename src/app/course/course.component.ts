import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Bridal Makeup','height':'30px','description':'Bridal Makeup Tutorial','image':'../../assets/bridal makeup.jpg'},
    {'id':2,'name':'Learn Celeb Look Makeup','height':'30px','description':'Celeb Look Makeup Tutorial','image':'../../assets/celeb look makeup.jpg'},
    {'id':3,'name':'Learn Models Makeup','height':'30px','description':'Models Makeup Tutorial','image':'../../assets/models makeup.jpg'},
    {'id':4,'name':'Learn Unique Makeup','height':'30px','description':'Unique Makeup Tutorial','image':'../../assets/unique makeup.jpg'},
  ]
}
