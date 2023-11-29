import { useEffect } from 'react';

/**
 *
 * @param {} indicator того, показывается ли сейчас спиннер загрузки
 */
function useChangeStrokeInSpinner(indicator) {
  useEffect(() => {
    if (!indicator) {
      return;
    }

    const $spinner = document.querySelector('#upper');

    if ($spinner) {
      $spinner.style.stroke = '#378b73';
    }
  }, [indicator]);
}

export default useChangeStrokeInSpinner;
