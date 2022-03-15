import Link from 'next/link'
import {useRouter} from 'next/router'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './Logo'
import styles from '../styles/footer.module.scss'
import configs from '../lib/configs'

const MenuItems = () => {
  const footerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/#about'},
    {name: 'Contact', link: '/#contact'},
  ]
  
  const currentPath = useRouter().pathname
  return (
  <Navbar className='ol-md-4 justify-content-center list-unstyled d-flex'>
  <Nav >
  {footerPageNames.map((pageInfo, index) => (
    <Link key={index} href={pageInfo.link}>
      <a className={'nav-link ' + (pageInfo.link===currentPath ? 'active' : '')}>
        {pageInfo.name}
      </a>
    </Link>
  ))}
  </Nav>
  </Navbar>
  )
}

const CopyRight = () => (
  <p className={styles.copy_right}>Copyright &copy; {new Date().getFullYear().toString()} - Forge Fire</p>
)

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.item}>
      <Logo size={45}/>
    </div>
    <div className={styles.item}>
      <MenuItems/>
      <CopyRight/>
    </div>
    <div className={styles.item}>
      <p className={styles.info}>{"KVK: " + configs.kvk_number}</p>
      <p className={styles.info}>{"BTW: " + configs.btw_number}</p>
    </div>
    </footer>
  )
}

export default Footer