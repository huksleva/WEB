// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import { DateTime } from 'luxon';

document.getElementById('klatz_btn').addEventListener('click', () => {
  const now = DateTime.now().setLocale('ru').toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('modalBody').textContent = now;

  const modalElement = document.getElementById('timeModal');
  const modal = new Modal(modalElement);
  modal.show();
});
