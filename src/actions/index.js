export const fakeAction = () => ({type: 'FAKE'});

export const sendToStore = (houses) => ({
  type: 'SEND_TO_STORE',
  houses
});