import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/bootstrap_custom.scss'
import '../styles/global.scss'

const App = ({Component, pageProps}) => {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default App
