import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

const Header = () => {
  const headerPageNames = [
    {name: 'Home', link: '/'},
    {name: 'Blogs', link: '/blogs'},
    {name: 'Consultancy', link: '/consultancy'},
  ]

  const currentPath = useRouter().pathname
  return (
    <Container>
        <header className='d-flex justify-content-center py-3'>
        <ul className="nav nav-pills">
        {headerPageNames.map((pageInfo, index) => (
          <li key={index} className='nav-item'>
            <Link href={pageInfo.link}>
              <a className={'nav-link ' + (pageInfo.link===currentPath ? 'active' : '')}>
                {pageInfo.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      </header>
    </Container>
  )
}

export default Header