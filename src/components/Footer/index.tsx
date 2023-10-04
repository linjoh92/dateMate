import styles from './footer.module.scss'

type FooterProps = {
  title: string
}

export default function Footer({ title }: FooterProps) {
  return (
    <div className={styles.footer}>
      <p className={styles['footer_title']}>{title}</p>
    </div>
  )
}
