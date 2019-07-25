import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HarryPotterService } from './harry-potter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  count = 0;
  limit = 10;
  data: any[] = [];
  list: Array<{ loading: boolean; character: any }> = [];

  constructor(private harryPotterService: HarryPotterService) {}

  ngOnInit() {
    this.loadData();
  }
  onLoadMore() {
    this.list = this.list.concat([...Array(this.limit)].fill({}).map(() => ({ loading: true, character: null })));
    this.count = this.count + this.limit;
    this.loadData();
  }
  private loadData() {
    this.initLoading = true;
    this.harryPotterService
      .getCharacters()
      .pipe(
        finalize(() => {
          this.initLoading = false;
        })
      )
      .subscribe(data => {
        this.data = data;
        this.list = this.data
          .map(u => {
            return { loading: false, character: u };
          })
          .slice(0, this.count + this.limit);
      });
  }
}
