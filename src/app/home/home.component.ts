import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'

interface Movie {
  title: string,
  id: string,
  cat: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Movie[] = [
    {
      title: "Bhagam Bhag",
      id: "zloKjQXmwhE",
      cat: 'Drama',
    },
    {
      title: "Hera Pheri",
      id: "TIQ5hrfermg",
      cat: 'Drama',
    },
    {
      title: "Deewane Huye Paagal",
      id: "d1p_PwY5Crc",
      cat: 'Drama',
    },
    {
      title: "Garam Masala",
      id: "gxBERAhEU7w",
      cat: 'Drama',
    },
    {
      title: "Khatta Meetha",
      id: "M7GfN3KU_S4",
      cat: 'Comedy',
    },
    {
      title: "Singh Is Bliing",
      id: "lg2i2oqnoy0",
      cat: 'Comedy',
    },
    
  ]
  categories = ["Drama", "Comedy"]
  movies: Movie[] = []
  constructor(private route:ActivatedRoute,
    private router:Router, public auth: AngularFireAuth) {
      route.params.subscribe(val=>{
        let categoryId = val['id']
        if(this.categories.find(cat => cat === categoryId)){
          this.movies = this.data.filter(movie=> movie.cat === categoryId)
        }else{
          this.movies = this.data
        }      })
  }

  ngOnInit(): void {
  }

}
