import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <div className={utilStyles.center}>
      <h1>Sadly this page wasn't found (⌯˃̶᷄ ﹏ ˂̶᷄⌯)</h1>
      <h2>
        <Link href="/">
          <a>Return to Dashboard</a>
        </Link>
      </h2>
    </div>
  )
}