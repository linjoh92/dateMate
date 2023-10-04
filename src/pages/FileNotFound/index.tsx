import styles from './fileNotFound.module.scss'
import { NavLink } from 'react-router-dom'

const FilenotFound = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h6>File not Found</h6>
      <NavLink to="/">
        <h3>Back to DATEMATE</h3>
      </NavLink>
    </div>
  )
}

export default FilenotFound
