import Header from '../components/Header'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.scss'

const App = ({Component, pageProps}) => {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default App
