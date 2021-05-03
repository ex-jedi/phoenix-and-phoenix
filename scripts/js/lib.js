function consoleGreeting() {
  console.log(
    "Well hello 👋🏾, fancy seeing you here. As you're interested in this sort of thing why not have a look at my GitHub profile - 💻👍🏾 https://github.com/ex-jedi 👍🏾💻"
  );
}
// *=========================================
// ** Main Nav  **
// *=========================================
const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.main-nav-link');

// Restore pointerevents
function pointerEventsRestore() {
  mainNavTrigger.style.pointerEvents = 'auto';
  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    navLink.forEach((link) => link.removeAttribute('style'));
  }
}

function menuOpenerHandler() {
  if (mainNav.dataset.state === 'closed') {
    openMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'open';
  } else {
    closeMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'closed';
  }
}

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

// *==============================================================================
// ** Homepage  **
// *==============================================================================

// *==============================================================================
// ** Services  **
// *==============================================================================

// ********** Tabs **********

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

export { tabClickHandler, consoleGreeting, addTabsListeners };
