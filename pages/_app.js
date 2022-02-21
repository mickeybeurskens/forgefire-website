import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ({Component, pageProps}) => {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default App
