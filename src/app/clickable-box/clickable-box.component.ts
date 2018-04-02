import { Component, ElementRef, HostListener, Inject, AfterViewInit, Renderer } from '@angular/core';
import { CountService } from '../count.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-clickable-box',
  templateUrl: './clickable-box.component.html',
  styleUrls: ['./clickable-box.component.css']
})
export class ClickableBoxComponent implements AfterViewInit {

  constructor(
    public countService: CountService,
    private renderer: Renderer,
    public elementRef: ElementRef) { }

  yoffset: number;
  xoffset: number;
  width: number;
  height: number;

  lastScrollX: number;
  lastScrollY: number;

  ngAfterViewInit() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.yoffset = window.innerHeight / 2;
    this.xoffset = window.innerWidth / 2;
    this.lastScrollX = window.pageXOffset;
    this.lastScrollY = window.pageYOffset;
    this.setStyle('left', this.xoffset + 'px');
    this.setStyle('top', this.yoffset + 'px');
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const xoffset = this.lastScrollX - window.pageXOffset;
    this.lastScrollX = window.pageXOffset;
    this.xoffset += xoffset;
    this.setStyle('left', Math.min(window.innerWidth - (this.width / 2 ), Math.max(this.width / 2, this.xoffset)) + 'px');
    const yoffset = this.lastScrollY - window.pageYOffset;
    this.lastScrollY = window.pageYOffset;
    if (yoffset !== 0) {
      this.yoffset += yoffset;
    }
    this.setStyle('top', Math.min(window.innerHeight - (this.height / 2), Math.max(this.height / 2 , this.yoffset)) + 'px');

  }
  private setStyle(key: string, value: string): void {
    this.renderer.setElementStyle(this.elementRef.nativeElement, key, value);
  }
}
