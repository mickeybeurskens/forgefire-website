import Link from 'next/link'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  const headerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'Blogs', link: '/blogs'},
    {name: 'Consultancy', link: '/consultancy'},
  ]

  const currentPath = useRouter().pathname
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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