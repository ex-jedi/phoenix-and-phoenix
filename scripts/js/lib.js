// *==============================================================================
// ** Utils  **
// *==============================================================================

function consoleGreeting() {
  console.log(
    "Well hello 👋🏾, fancy seeing you here. As you're interested in this sort of thing why not have a look at my GitHub profile - 💻👍🏾 https://github.com/ex-jedi 👍🏾💻"
  );
}

// *==============================================================================
// ** Tabs  **
// *==============================================================================

function getTabsElements() {
  const tabs = document.querySelector('.tabs-wrapper');
  const tabButtons = tabs.querySelectorAll('[role="tabButton"]');
  const tabPanel = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
  return { tabs, tabButtons, tabPanel };
}

function tabClickHandler(e) {
  const { tabPanel, tabButtons } = getTabsElements();
  const clickedTab = e.currentTarget;
  // Hide tab panels
  tabPanel.forEach((panel) => (panel.hidden = true));
  // Mark all tab buttons as unselected
  tabButtons.forEach((buttons) => buttons.setAttribute('aria-selected', false));
  // Mark the clicked tab button as selected
  clickedTab.setAttribute('aria-selected', true);
  // Find associated tab panel and show it
  const { id } = clickedTab;
  const panelToShow = tabPanel.find((panel) => panel.getAttribute('aria-labelledby') === id);
  panelToShow.hidden = false;
}

function addTabsListeners() {
  const { tabButtons } = getTabsElements();
  tabButtons.forEach((button) => button.addEventListener('click', tabClickHandler));
}

// *=========================================
// ** Exports  **
// *=========================================

export { consoleGreeting, addTabsListeners, getTabsElements };
