import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onPromisesSubmit);

function onPromisesSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = Number(value);
  });

  createArray(formDataObj);
}

function createArray({ delay, step, amount }) {
  const delaysArray = Array.from(
    { length: amount },
    (_, i) => delay + i * step
  );

  const promises = delaysArray.map(createPromise);
  console.log(promises);
}

function createPromise(delay, position) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promice ${position + 1} in ${delay} ms`);
      } else {
        // Reject
        reject(`❌ Rejected promice ${position + 1} in ${delay} ms`);
      }
    }, delay);
  })
    .then(value => Notify.success(value))
    .catch(error => Notify.failure(error));
}
