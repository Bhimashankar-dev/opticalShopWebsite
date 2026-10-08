


const BranchTabs = ({ branches, activeTabId, onTabChange }) => {
  return (
    <div className="branch-tabs" role="group" aria-label="Select a branch">
      {branches.map(branch => (
        <button
          type="button"
          key={branch.id}
          className={
            activeTabId === branch.id
              ? "branch-tab active"
              : "branch-tab"
          }
          onClick={() => onTabChange(branch.id)}
          aria-pressed={activeTabId === branch.id}
        >
          <span>{branch.id}</span>
          {branch.location}
        </button>
      ))}
    </div>
  )
}

export default BranchTabs