import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './Logo'
import styles from '../styles/footer.module.scss'

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
  <div className="col-md-4 d-flex align-items-center">
    <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <a><Image src='/logo_forge_fire.svg' alt='forge fire logo' width="40" height="40"/></a>
    </Link>
    <span className="text-muted">&copy; {new Date().getFullYear().toString()} Forge Fire</span>
  </div>
)

const Footer = () => {
  return (
    <footer className={styles.footer + " d-flex flex-wrap justify-content-between align-items-center"}>
    <Logo size={40}/>
    <MenuItems/>
    </footer>
  )
}

export default Footer