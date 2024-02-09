import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListPosition from './ListPosition';


function NavbarMeteo(props) {


  return (
    <Navbar expand="lg" className="container-fluid bg-body-tertiary d-flex justify-content-between">

        <img className=' m-0 mx-3 p-0' src={props.logo} height={"36px"} alt='Logo MezzeSeasons'></img>

              <div className=' d-flex justify-content-evenly align-items-center ms-auto gap-5 me-3'> 

<div className='mx-5 d-none d-lg-inline'>
        <ListPosition position={props.userLocation} />
</div>

          <Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="La tua località.."
              className="me-2"
              aria-label="La tua località.."
              />
            <Button variant="outline-success">Cerca</Button>
          </Form>

              </div>

    </Navbar>
  )
}

export default NavbarMeteo;