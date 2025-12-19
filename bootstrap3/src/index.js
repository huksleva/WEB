// src/index.js
import { DateTime } from 'luxon';

// Стили — если решите оставить часть Bootstrap CSS, см. ниже
// import 'bootstrap/dist/css/bootstrap.min.css'; // ← можно оставить ТОЛЬКО если используете CSS

document.getElementById('klatz_btn').addEventListener('click', () => {
  const now = DateTime.now().setLocale('ru').toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('modalBody').textContent = now;
  document.getElementById('timeModal').classList.add('show');
  document.getElementById('timeModal').style.display = 'block';
});

// Закрытие по кнопке "Закрыть"
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('timeModal').classList.remove('show');
  document.getElementById('timeModal').style.display = 'none';
});

// Закрытие по клику вне модального окна
document.getElementById('timeModal').addEventListener('click', (e) => {
  if (e.target.id === 'timeModal') {
    e.target.style.display = 'none';
  }
});
