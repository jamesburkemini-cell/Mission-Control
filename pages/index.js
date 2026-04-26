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
        <h1>Mission Control Dashboard</h1>
        <div className={styles.panes}>
          <section>
            <h2>Lead Hunter</h2>
            <p>Lead intake and tracking</p>
          </section>
          <section>
            <h2>Deal Closer</h2>
            <p>Follow-ups, call booking</p>
          </section>
          <section>
            <h2>Calendar Keeper</h2>
            <p>Appointments & reminders</p>
          </section>
          <section>
            <h2>Scoreboard</h2>
            <p>Daily/weekly business stats</p>
          </section>
        </div>
      </main>
    </div>
  )
}
