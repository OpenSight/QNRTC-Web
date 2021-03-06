export const RTC_APP_ID = process.env.TEST_ENV ? 'd79zybi3q' : 'd8lk7l4ed';
// export const RTC_APP_ID = 'dgip3ldfh';

export const HOST = process.env.TEST_ENV ? 'http://blh7wczarrnz.kegate-xq.cloudappl.com' : 'https://api-demo.qnsdk.com';
export const PREFIX = '/v1/rtc';

export const API = {
  LIST_ROOM: `/rooms/app/${RTC_APP_ID}`,
  GET_APP_CONFIG: (appid?) => `/app/${appid || RTC_APP_ID}`,
  JOIN_ROOM_TOKEN: (roomName, user, appid?) => `/token/app/${appid || RTC_APP_ID}/room/${roomName}/user/${user}`,
  CREATE_ROOM_TOKEN: (roomName, user, appid?) => `/token/admin/app/${appid || RTC_APP_ID}/room/${roomName}/user/${user}`,
};
