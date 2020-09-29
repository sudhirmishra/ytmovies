import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  @Input()
  movie:string;

  @Input()
  movie_name:string

  @Input()
  show_url:boolean;

  constructor(public auth: AngularFireAuth){
    console.log(typeof this.show_url)
  }

  ngOnInit(): void {
    console.log(typeof this.show_url)
  }

  watch(id:string) {
    window.open("https://youtube.com/watch?v="+id, '_blank');
  }

  login(){
    this.auth.signInWithRedirect(new auth.GoogleAuthProvider())
  }
}
