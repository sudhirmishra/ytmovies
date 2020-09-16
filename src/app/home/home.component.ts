import { Component, OnInit } from '@angular/core';

interface Movie {
  title: string,
  id: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [
    {
      title: "Bhagam Bhag",
      id: "zloKjQXmwhE"
    },
    {
      title: "Hera Pheri",
      id: "TIQ5hrfermg"
    },
    {
      title: "Deewane Huye Paagal",
      id: "d1p_PwY5Crc"
    },
    {
      title: "Garam Masala",
      id: "gxBERAhEU7w"
    },
    {
      title: "Khatta Meetha",
      id: "M7GfN3KU_S4"
    },
    {
      title: "Singh Is Bliing",
      id: "lg2i2oqnoy0"
    },
    
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
