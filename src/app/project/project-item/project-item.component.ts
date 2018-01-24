import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../animate/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() Invite = new EventEmitter<void>();
  @Output() UpdateProject = new EventEmitter<void>();
  @Output() DelProj = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
      this.cardState = 'hover';
    }
  @HostListener('mouseleave')
  onmouseLeave() {
    this.cardState = 'out';
  }

  onInviteclick() {
    this.Invite.emit();
  }
  OnUpdateProject() {
    this.UpdateProject.emit();
  }
  OnDelClick() {
    this.DelProj.emit();
  }
}
