import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, Form ,Button} from 'react-bootstrap';

function Header() {
  return (
    <div>
      
      <Navbar expand="lg" className="bg-black top-0 w-100">
        <Container>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center   align-items-center  " style={{marginLeft:'600px'}}>
              
              <div className='d-flex align-items-center'>
                <Nav.Link className='' href='#appletv'  style={{ textDecoration: 'none', color: 'white' }}>APPLE TV+</Nav.Link>
                <Nav.Link className='ps-3' href="https://tv.apple.com/us/channel/tvs.sbd.7000" style={{ textDecoration: 'none', color: 'white' }}>MLS SEASON PASS</Nav.Link>

               
              </div>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Form.Control  style={{height:'0px' ,width:'200px' ,marginRight:'20px' ,backgroundColor: 'transparent' , border :'rounded ' ,color:'white'}} size="sm" type="text" placeholder=" 🔍︎Search"   />
        
      <Button variant="primary" className='p-1' style={{marginRight:'50px' ,width:'130px'}}>Sign Up</Button>{' '}
      </Navbar>
    </div>
  );
}

export default Header;
