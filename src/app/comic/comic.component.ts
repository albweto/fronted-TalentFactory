import { Component, OnInit } from '@angular/core';
import { ComicService } from '../service/comic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor(private comicService:ComicService) { }
  allComics: Observable<any>;

  ngOnInit() {
    this.getAllComic();
  }


  getAllComic(){
    this.allComics = this.comicService.getAllComics();
  }

}
