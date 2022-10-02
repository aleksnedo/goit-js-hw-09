import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TIMER_DEADLINE = new Date(2022, 10, 10, 22, 22);
let timerId = null;

const timerRef = document.querySelector('.timer');

const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector, deadline) {
    const deltaTime = deadline.getTime() - Date.now();
    console.log(deltaTime);

    if (deltaTime <= 0) {
      Notify.failure('Please choose a date in the future', {
        position: 'center-center',
        backOverlay: true,
        clickToClose: true,
        closeButton: true,
      });
      return;
    }
  },
};

timer.start(timerRef, TIMER_DEADLINE);
