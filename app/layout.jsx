import '../styles/globals.css'
import classes from '../styles/Home.module.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className={classes.container}>
        <Providers>
          <main className={classes.main}>
            <h1 className={classes.title}>NEXT 13 APP</h1>
            <hr/>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
