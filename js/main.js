import { initClipboard } from './modules/clipboard.js';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализация модуля копирования контактов
  initClipboard();

  // Обработчик кнопки печати / сохранения PDF
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
});
