import styles from './header.module.scss'
import Logo from '../../assets/logga.png'
import Navbar from '../Navbar'


type HeaderProps = {
    title: string,
    subtitle: string
}

export default function Header ({title, subtitle}:HeaderProps) {

 return (
    <div>
      <div className={styles.header}>
          <div className={styles["header_logo"]}><img src={Logo} height="60px" /></div>
          <h1 className={styles["header_title"]}>{title}</h1>
          <h2 className={styles["header_subtitle"]}>{subtitle} </h2>
      </div>
      <Navbar/>
    </div>
 )
}


