import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from '../styles/Header.module.scss'

const Header = () => {
  const headerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'Blog', link: '/posts'},
    {name: 'Consultancy', link: '/consultancy'},
    {name: 'Contact', link: '/contact'}
  ]

  const currentPath = useRouter().pathname
  return (
    <Navbar className={styles.navigation} variant="dark">
    <Container>
    <Navbar.Brand href="/">
      <Image src='/logo_forge_fire.png' alt='forge fire logo'
        width="48" height="48"/>
    </Navbar.Brand>
    <Nav className="me-auto">
      {headerPageNames.map((pageInfo, index) => (
        <Link key={index} href={pageInfo.link}>
          <a className={'nav-link ' + (pageInfo.link===currentPath ? 'active' : '')}>
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