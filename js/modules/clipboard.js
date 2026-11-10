/**
 * Модуль копирования контактов в буфер обмена
 */
export function initClipboard() {
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('is-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('is-visible');
      toast.classList.remove('is-visible');
    }, 2200);
  }

  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      const textToCopy = el.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback для нестандартных условий
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast(`Скопировано: ${textToCopy}`);
      } catch (err) {
        console.error('Ошибка копирования:', err);
      }
    });
  });
}
