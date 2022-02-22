import Link from "next/link"

const Consultancy = () => {
  return (
    <div className="d-flex text-centered flex-column text-center p-3">
      <h1>Software Engineering and Consultancy</h1>

      <p>
        We design software for customers and give advice on
        your projects across the full software stack. Take a look
        at some of our projects below or contact us for a chat!
      </p>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link href='/contact' passHref>
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Contact Us</button>
        </Link>
      </div>
    </div>
  )
}

export default Consultancy