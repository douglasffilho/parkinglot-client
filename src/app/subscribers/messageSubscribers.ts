const subscribers: Function[] = [];

export default {
  subscribe(subscriber: Function) {
    subscribers.push(subscriber);
  },

  publish(notification: { message: string, type: "info"|"error"|"warning" }) {
    for (const subscriber of subscribers) {
      subscriber(notification);
    }
  }
};
