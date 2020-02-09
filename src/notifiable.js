
import Notification from './notification';
import Contract from './contract';

export default class Notifiable {
  constructor() {
    this.notifications = [];
  }

  AddNotification(property, message) {
    this.notifications.push(new Notification(property, message));
  }

  AddNotifications(contract) {
    if (contract instanceof Contract) {
      contract.notifications.forEach((notification) => {
        this.notifications.push(new Notification(notification.property, notification.message));
      });
    } else {
      contract.forEach((notification) => {
        this.notifications.push(new Notification(notification.property, notification.message));
      });
    }
  }

  isValid() {
    return this.notifications.length === 0;
  }

  getMessages() {
    return this.notifications.map(x => x.message);
  }
}
