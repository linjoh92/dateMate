import styles from "./footer.module.scss"

type FooterProps = {
  title: string
  subtitle: string
}

export default function Footer({title, subtitle}:FooterProps) {

  return (
    <div className={styles.footer}>
      <p className={styles["footer_subtitle"]}>{subtitle}</p>
      <p className={styles["footer_title"]}>{title}</p>
    </div>
  )
}
