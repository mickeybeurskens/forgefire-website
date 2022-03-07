import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from '../styles/header.module.scss'

const Header = () => {
  const headerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'Projects', link: '/projects'},
    {name: 'Consultancy', link: '/consultancy'},
    {name: 'Contact', link: '/contact'}
  ]

  const currentPath = useRouter().pathname
  return (
    <Navbar className={styles.navigation} variant="light">
    <Container>
    <div className={styles.logo}>
      <Image src='/logo_forge_fire.svg' 
        alt='forge fire logo' width="55" height="55"/>
    </div>
    <Nav className="me-auto">
      {headerPageNames.map((pageInfo, index) => (
        <Link key={index} href={pageInfo.link}>
          <a className={styles.text + ' nav-link ' + (pageInfo.link===currentPath ? 'active' : '')}>
            {pageInfo.name}
          </a>
        </Link>
      ))}
    </Nav>
    </Container>
    </Navbar> 
  )
}

export default Header