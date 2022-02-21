import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "next/image"

const IconItem = () => {
  return (
    <Col className="col d-flex align-items-start">
      <Image className="flex-shrink-0" alt="icon" width="30em" height="30em" src="/logo_forge_fire.svg"/>
      <div>
        <h4>Icon Title</h4>
        <p>Some text corresponding to icon.</p>
      </div>
    </Col>
  )
}

const IconGrid = () => {
  const testarray = [1, 2, 3, 4, 5, 6]
  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {testarray.map((elem, index) => (
        <IconItem key={index}/>
      ))}
    </Row>
  )  
}

const ServiceOverview = () => {
  return (
    <Container>
      <h2 className="pb-2 border-bottom">Icon grid</h2>
      <IconGrid/>
    </Container>
  )
}

export default ServiceOverview