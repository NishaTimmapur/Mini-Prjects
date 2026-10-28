import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stopwatch',
  styleUrl: './stopwatch.css',
  templateUrl: './stopwatch.html',
})
export class Stopwatch {
  time = signal(0);
  interval : any;
  start(){
    this.interval = setInterval(()=>
      {
        this.time.update(c => c + 1);
      }, 1000);
  }

  stop(){
      clearInterval(this.interval);
  }

  reset(){
    this.time.set(0);
  }
   
}
