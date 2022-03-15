import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo'
import styles from '../styles/header.module.scss'
import configs from '../lib/configs.js'


const Header = () => {
  const headerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'Projects', link: '/#projects'},
    {name: 'About', link: '/#about'},
    {name: 'Contact', link: '/#contact'}
  ]
  const socials_size = 35;

  const currentPath = useRouter().pathname
  return (
    <Navbar expand='md' className={styles.navigation} variant="light">
    <Container>
    <Logo size={55}/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="me-auto">
        {headerPageNames.map((pageInfo, index) => (
          <Link key={index} href={pageInfo.link}>
            <a className={styles.text + ' nav-link ' + (pageInfo.link===currentPath ? 'active' : '')}>
              {pageInfo.name}
            </a>
          </Link>
        ))}
      </Nav>
      <div className={styles.socials}>
        <a href={configs.github_url}>
          <Image src='/github_logo.png'
            alt='github logo' width={socials_size} height={socials_size}/>
        </a>
        <a href={configs.linkedin_url}>
          <Image src='/linkedin_logo.png'
            alt='linkedin logo' width={socials_size} height={socials_size}/>
        </a>
      </div>
    </Navbar.Collapse>
    </Container>
    </Navbar> 
  )
}

export default Header