import PropTypes from 'prop-types'

import './footer.css'
import TasksFilter from '../tasks-filter'

function Footer({
  doneCount, filterActive, filterCompleted, filterAll, delAllItems,
}) {
  return (
    <footer className="footer__container">
      <span className="footer__todo-count">
        {doneCount}
        {' '}
        items left
      </span>
      <TasksFilter
        filterActive={filterActive}
        filterCompleted={filterCompleted}
        filterAll={filterAll}
      />
      <button className="footer__clear_completed" onClick={delAllItems}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  doneCount: 1,
  filterActive: () => {},
  filterCompleted: () => {},
  filterAll: () => {},
  delAllItems: () => {},
}

Footer.propTypes = {
  doneCount: PropTypes.number,
  filterActive: PropTypes.func,
  filterCompleted: PropTypes.func,
  filterAll: PropTypes.func,
  delAllItems: PropTypes.func,
}

export default Footer
