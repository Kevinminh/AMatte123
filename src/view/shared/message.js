import { notification } from "antd";

export default class Message {
  static success(arg) {
    Notification.success({
      message: arg,
      description: ""
    });
  }

  static error(arg) {
    Notification.error({
      message: arg,
      description: ""
    });
  }
}
