import Link from 'next/link'
import {useRouter} from 'next/router'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './Logo'
import styles from '../styles/footer.module.scss'
import configs from '../lib/configs'

const MenuItems = () => {
  const footerPageNames = [
    {name: 'Privacy Policy', link: '/'},
    {name: 'About', link: '/posts'},
    {name: 'Contact', link: '/consultancy'},
  ]
  
  const currentPath = useRouter().pathname
  return (
  <Navbar className='ol-md-4 justify-content-end list-unstyled d-flex'>
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
  <p className={styles.copy_right}>&copy; {new Date().getFullYear().toString()} Forge Fire</p>
)

const Footer = () => {
  return (
    <footer className={styles.footer}>
    
    <Logo size={45}/>
    <div>
      <MenuItems/>
      <CopyRight/>
    </div>
    <div>
      <p>{"KVK: " + configs.kvk_number}</p>
      <p>{"BTW: " + configs.btw_number}</p>
    </div>
    </footer>
  )
}

export default Footer