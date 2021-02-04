const tabs = document.querySelector('.tabs-wrapper');
const tabButtons = tabs.querySelectorAll('[role="tabButton"]');
const tabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
  const clickedTab = e.currentTarget;
  // Hide tab panels
  tabPanel.forEach((panel) => (panel.hidden = true));
  // Mark all tab buttons as unselected
  tabButtons.forEach((buttons) => buttons.setAttribute('aria-selected', false));
  // Mark the clicked tab button as selected
  clickedTab.setAttribute('aria-selected', true);
}

tabButtons.forEach((button) => button.addEventListener('click', tabClickHandler));
