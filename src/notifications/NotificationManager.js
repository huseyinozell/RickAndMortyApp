import PushNotification from 'react-native-push-notification';

class NotificationManager {
    
    constructor(){
        PushNotification.createChannel(
            {
              channelId: "local-channel", 
              channelName: "Rick And Morty Channel", 
              channelDescription: "Rick and Morty Notification Channel", 
              playSound: false, 
              soundName: "default", 
              importance: 4, 
              vibrate: true, 
            },
            (created) => console.log(`Channel create returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );
    }


  configure = () => {
    PushNotification.configure({
      
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Action is pressed (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        
      },

      
      onNotificationOpened: function (notification) {
        console.log("NOTIFICATION OPENED:", notification);
      },

      
      senderID: "YOUR GCM SENDER ID",

      
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      
      popInitialNotification: true,

      requestPermissions: Platform.OS === 'ios',
    });
  };

  showNotification = (title, message) => {
    PushNotification.localNotification({
    channelId : "local-channel",
      title: title, // (optional)
      message: message, // (required)
    });
  };
}

export const notificationManager = new NotificationManager();
