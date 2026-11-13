// Refresh at minute intervals and on returning to a suspended/background page.
// Explicit timezones retain their offsets; AoE is UTC−12.
// Unzoned calendar dates use the viewer's local calendar, not an assumed UTC deadline.
(() => {
  if (window.clefDatesInitialized) return;
  window.clefDatesInitialized = true;

  function updateDates() {
    const now = Date.now();
    document.querySelectorAll('[data-dates-table]').forEach(table => {
      table.querySelectorAll('tbody tr[data-start]').forEach(row => {
        const start = Date.parse(row.dataset.start);
        const until = Date.parse(row.dataset.until);
        const passed = now >= until;
        const active = now >= start && !passed;
        const strike = passed && table.dataset.pastMode === 'strike';
        row.hidden = passed && table.dataset.pastMode === 'omit';
        row.classList.toggle('opacity-60', strike);
        row.querySelectorAll('.event-name, .event-date').forEach(element => {
          element.classList.toggle('line-through', strike);
        });
        const status = row.querySelector('.event-status');
        if (passed) status.textContent = 'Passed';
        else if (active) status.textContent = row.dataset.period === 'true' ? 'In progress' : 'Today';
        else {
          const days = Math.ceil((start - now) / 86400000);
          status.textContent = `${days} ${days === 1 ? 'day' : 'days'}`;
        }
      });
    });
  }

  updateDates();
  setInterval(updateDates, 60000);
  document.addEventListener('visibilitychange', updateDates);
  window.addEventListener('pageshow', updateDates);
})();
