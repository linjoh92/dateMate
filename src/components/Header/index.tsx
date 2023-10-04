import styles from './header.module.scss'
import Logo from '../../assets/Logo_outline.svg'

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles['header_logo']}>
        <img src={Logo} height="60px" />
      </div>
      <h1 className={styles['header_title']}>{title}</h1>
    </div>
  )
}
