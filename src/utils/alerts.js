import Swal from "sweetalert2";

export function redirectAlert(title, icon, fn, url) {
  let timerInterval;
  Swal.fire({
    title: title,
    html: "Sera redireccionado en <b></b> milliseconds.",
    timer: 2000,
    icon,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
        fn(url)
      clearInterval(timerInterval);
    },
  });
}

export function generalAlert(title, text, icon) {
  Swal.fire({
    title,
    text, 
    icon
  });
}
