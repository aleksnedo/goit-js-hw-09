import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const notifyOptions = {
  position: 'center-center',
  backOverlay: true,
  clickToClose: true,
  closeButton: true,
};

const refs = {
  startBtnRef: document.querySelector('button[data-start]'),
  inputDateRef: document.querySelector('#datetime-picker'),
  daysRef: document.querySelector('[data-days]'),
  hoursRef: document.querySelector('[data-hours]'),
  minutesRef: document.querySelector('[data-minutes]'),
  secondsRef: document.querySelector('[data-seconds]'),
};

refs.startBtnRef.addEventListener('click', () => timer.start());

let deadlineTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] <= Date.now()) {
      // refs.startBtnRef.setAttribute('disabled', false);
      Notify.failure('Please choose a date in the future', notifyOptions);
      selectedDates[0] = new Date();
    } else {
      refs.startBtnRef.toggleAttribute('disabled');
      deadlineTime = selectedDates[0].getTime();
    }
  },
};

class Timer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
    refs.startBtnRef.disabled = true;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const deltaTime = deadlineTime - currentTime;
      const timeData = convertMs(deltaTime);

      if (deltaTime <= 1000) {
        clearInterval(this.intervalId);
      }

      if (this.isActive) {
        refs.startBtnRef.disabled = true;
      }

      refs.daysRef.textContent = timeData.days;
      refs.hoursRef.textContent = timeData.hours;
      refs.minutesRef.textContent = timeData.minutes;
      refs.secondsRef.textContent = timeData.seconds;
    }, 1000);

    function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = pad(Math.floor(ms / day));
      const hours = pad(Math.floor((ms % day) / hour));
      const minutes = pad(Math.floor(((ms % day) % hour) / minute));
      const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

      return { days, hours, minutes, seconds };
    }

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}
const timer = new Timer();
flatpickr(refs.inputDateRef, options);
