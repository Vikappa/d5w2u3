import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavWeather from './NavWeather'
import { Link } from'react-router-dom'
import RicercaLocalità from './RicercaLocalità'


function NavbarMeteo(props) {


  return (
    <Navbar expand="lg" className="container-fluid bg-body-tertiary d-flex justify-content-between m-0 p-0">
<Link to="/">
<Navbar.Brand className='p-0 m-0'>
        <img className=' m-0 mx-3 p-0' src={props.logo} height={"36px"} alt='Logo MezzeSeasons'></img>
        Mezze Seasons
</Navbar.Brand>
</Link>

              <div className=' d-flex justify-content-evenly align-items-center ms-auto gap-5 me-3'> 

<div className='mx-5 d-none d-lg-inline'>
        <NavWeather position={props.userLocation} />
</div>

          <div className="d-flex mx-auto">
<RicercaLocalità setShowModal={props.setShowModal}  />
          </div>

              </div>

    </Navbar>
  )
}

export default NavbarMeteo