import PropTypes from 'prop-types'

import { BottomNavigation, BottomNavigationAction } from '@mui/material'

import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <BottomNavigation
      showLabels
      value={filter}
      onChange={(event, newValue) => {
        setFilter(newValue)
      }}
    >
      <BottomNavigationAction value="undone" label="To do" icon={<CheckBoxOutlineBlankIcon />} />
      <BottomNavigationAction value="all" label="All" icon={<FormatListBulletedIcon />} />
      <BottomNavigationAction value="done" label="Done" icon={<CheckBoxIcon />} />
    </BottomNavigation>
  )
}

TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
}
export default TodoFilter
