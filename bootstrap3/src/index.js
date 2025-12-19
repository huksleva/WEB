// src/index.js
import { DateTime } from 'luxon';

document.getElementById('klatz_btn').addEventListener('click', () => {
  const now = DateTime.now().setLocale('ru').toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('modalBody').textContent = now;
  document.getElementById('timeModal').classList.add('show'); // ← Добавляем класс
});

// Закрытие по кнопке "Закрыть"
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('timeModal').classList.remove('show'); // ← Убираем класс
});

// Закрытие по клику вне модального окна
document.getElementById('timeModal').addEventListener('click', (e) => {
  if (e.target.id === 'timeModal') {
    e.target.classList.remove('show'); // ← Убираем класс
  }
});
