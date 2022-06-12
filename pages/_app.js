import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/bootstrap_custom.scss'
import '../styles/global.scss'
import configs from '../lib/configs'

const App = ({Component, pageProps}) => {
  return <>
    <Head>
      <title>Forge Fire Artificial Intelligence Engineering</title>
      <meta name="author" content={configs.author}/>
      <meta name="description" content={configs.site_description}/>
      <meta name="keywords" content="Artificial Intelligence, Forge Fire, Consultancy, 
        Vision, Robotics, Machine Learning, Software, Data Science"/>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default App
