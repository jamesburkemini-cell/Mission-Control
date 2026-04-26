import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>Lead Hunter</li>
        <li>Deal Closer</li>
        <li>Calendar Keeper</li>
        <li>Scoreboard</li>
      </ul>
    </nav>
  );
}

