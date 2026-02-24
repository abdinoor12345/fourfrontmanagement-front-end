 

/**
 * Toggle membership description open/closed.
 * Closes any other open card first (accordion behaviour).
 * @param {string} cardId - The ID of the membership card to toggle.
 */
function toggleMembership(cardId) {
  const card = document.getElementById(cardId);
  const header = card.querySelector('.membership-header');
  const isOpen = card.classList.contains('open');

  // Close all cards first
  document.querySelectorAll('.membership-card').forEach(function (c) {
    c.classList.remove('open');
    c.querySelector('.membership-header').setAttribute('aria-expanded', 'false');
  });

  // If the clicked card was not open, open it
  if (!isOpen) {
    card.classList.add('open');
    header.setAttribute('aria-expanded', 'true');
  }
}

/**
 * Show the membership details modal.
 * @param {Event} e - Click event from the CTA link.
 */
function showDetailsModal(e) {
  e.preventDefault();
  var modalEl = document.getElementById('detailsModal');
  var modal = new bootstrap.Modal(modalEl);
  modal.show();
}

/**
 * Initialise Bootstrap tooltips on all elements
 * that carry the data-bs-toggle="tooltip" attribute.
 */
function initTooltips() {
  var tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });
}

 document.addEventListener('DOMContentLoaded', function () {
  initTooltips();
});