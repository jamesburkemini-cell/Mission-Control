import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mission Control</title>
        <meta name="description" content="AI Content Solutions Mission Control Dashboard" />
      </Head>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>Mission Control Dashboard</h1>
        <div className={styles.panes}>
          <section className={styles.section}>
            <h2 className={styles.heading}>Lead Hunter</h2>
            <p className={styles.paragraph}>Lead intake and tracking</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Deal Closer</h2>
            <p className={styles.paragraph}>Follow-ups, call booking</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Calendar Keeper</h2>
            <p className={styles.paragraph}>Appointments & reminders</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.heading}>Scoreboard</h2>
            <p className={styles.paragraph}>Daily/weekly business stats</p>
          </section>
        </div>
      </main>
    </div>
  )
}
