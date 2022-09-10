const subscribers: any = {
  carsListRefresh: [],
  message: [],
};

const publishers = {
  carsListRefresh: {
    publish: () => {
      for (const subscribe of subscribers['carsListRefresh']) {
        subscribe();
      }
    },
  },

  message: {
    publish: (notification: {
      message: string;
      type: 'info' | 'error' | 'warning';
    }) => {
      for (const subscribe of subscribers['message']) {
        subscribe(notification);
      }
    },
  },
};

export default {
  subscribe(index: 'message' | 'carsListRefresh', subscriber: Function) {
    subscribers[index].push(subscriber);
  },

  getCarsListRefreshPublisher() {
    return publishers['carsListRefresh'];
  },

  getMessagePublisher() {
    return publishers['message'];
  },
};
