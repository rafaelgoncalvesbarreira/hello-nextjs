'use client'

import { useWebWorker } from '@/hooks/useWebWorker';
import styles from '../page.module.css';

const Page = () => {
  const [startWork, busy, completed, result] = useWebWorker<string>(new URL('../../workers/teste.worker.js',import.meta.url));

  const handleClick = () =>{
    startWork();
  }

  return (
    <main className={styles.main}>
      <button type='button' onClick={handleClick}>
        START
      </button>
      {busy && "busy"}
      {completed &&
        (<p>result: { result }</p>)
      }
    </main>
  )
}

export default Page;