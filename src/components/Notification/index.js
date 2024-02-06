import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="alert-notification-list-container">{children}</div>
      <GrFormClose className="clear-notification-img" />
    </div>
  )
}

export default Notification
