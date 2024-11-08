import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, currentActive} = props
  const {tabId, displayText} = tabDetails
  const tabItemButton = currentActive === tabId ? 'active-tab' : ''
  const showActiveTabApps = () => {
    activeTab(tabId)
  }
  return (
    <li className="tab-item">
      <button
        className={`${tabItemButton} tab`}
        onClick={showActiveTabApps}
        id={tabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
