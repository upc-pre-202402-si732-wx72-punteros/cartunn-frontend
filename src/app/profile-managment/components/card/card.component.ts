import { Component } from '@angular/core';
import { NotificationsApiService} from "../../services/notifications-api/notifications-api.service";
import { Notifications} from "../../model/notifications.entity";

@Component({
  selector: 'app-card-notifications',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class NotificationsCardComponent {
  notifications: Notifications[] = [];

  constructor(private notificationsService: NotificationsApiService) { }

  ngOnInit(): void {
    this.notificationsService.getNotifications()
      .subscribe((data: Notifications[]) => {
        this.notifications = data;
      });
  }
}
