import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent {
  running = false;

  interval;

  time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

  timer():void {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  startTimer():void {
    this.timer();
  }

  stopTimer():void {
    clearInterval(this.interval);
  }

  resetTimer():void {
    this.time = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    this.timer();
  }

  waitTimer():void {
    this.running = true;
    if (this.running) {
      clearInterval(this.interval);
    }
  }
}
