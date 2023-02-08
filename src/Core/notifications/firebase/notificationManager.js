import { firebase } from '../../firebase/config';

const notificationsRef = firebase.firestore().collection('notifications');

const fcmURL = 'https://fcm.googleapis.com/fcm/send';
const firebaseServerKey =
  'AAAAbbua1sU:APA91bEoTe6NRS-Ftx-haPCBLBKTSMyEQneEdCAJ3MdzHLC2m2F3iZEiviIBIEz-OYwZJcl-OqV0iDIvT_PEgNmFH6ZQ0gfjwMwGbVVLo2OfMeg0IDnZ7oE5re3zW292flU2fdBLa6tR';

const sendPushNotification = async (
  toUser,
  title,
  body,
  type,
  metadata = {},
) => {
  if (metadata && metadata.outBound && toUser.id == metadata.outBound.id) {
    return;
  }

  const notification = {
    toUserID: toUser.id,
    title,
    body,
    metadata,
    toUser,
    type,
    seen: false,
  };

  const ref = await notificationsRef.add({
    ...notification,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
  notificationsRef.doc(ref.id).update({ id: ref.id });
  if (!toUser.pushToken) {
    return;
  }

  const pushNotification = {
    to: toUser.pushToken,
    notification: {
      title: title,
      body: body,
    },
    data: { type, toUserID: toUser.id, ...metadata },
  };

  fetch(fcmURL, {
    method: 'post',
    headers: new Headers({
      Authorization: 'key=' + firebaseServerKey,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(pushNotification),
  });
};

const sendCallNotification = async (
  sender,
  recipient,
  channelID,
  callType,
  callID,
) => {
  if (!recipient.pushToken) {
    return;
  }

  const pushNotification = {
    to: recipient.pushToken,
    priority: 'high',
    data: {
      channelID,
      recipientID: recipient.id,
      senderID: sender.id,
      callType,
      callID,
      callerName: sender.firstName,
      priority: 'high',
      contentAvailable: true,
    },
  };

  try {
    const response = await fetch(fcmURL, {
      method: 'post',
      headers: new Headers({
        Authorization: 'key=' + firebaseServerKey,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(pushNotification),
    });
    console.log('jjj push notif ' + JSON.stringify(pushNotification));
    console.log(JSON.stringify(response));
  } catch (error) {
    console.log(error);
  }
};

export const notificationManager = {
  sendPushNotification,
  sendCallNotification,
};
