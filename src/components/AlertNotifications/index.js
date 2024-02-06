import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="notification-display-container">
        <AiFillCheckCircle className="icon-style success" />
        <div>
          <h1 className="notification-heading success">Success</h1>
          <p className="notification-description">
            You can access all the files in the folder
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderFailureNotification = () => (
    <Notification>
      <div className="notification-display-container">
        <RiErrorWarningFill className="icon-style error" />
        <div>
          <h1 className="notification-heading error">Error</h1>
          <p className="notification-description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="notification-display-container">
        <MdWarning className="icon-style warning" />
        <div>
          <h1 className="notification-heading warning">Warning</h1>
          <p className="notification-description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="notification-display-container">
        <MdInfo className="icon-style info" />
        <div>
          <h1 className="notification-heading info">Info</h1>
          <p className="notification-description">
            Anyone on the internet can view these files
          </p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="alert-main-container">
      <h1>Alert Notifications</h1>
      <div className="alert-container">
        {renderSuccessNotification()}
        {renderFailureNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
