import logo from './logo.svg'
import { Switch,Route,Link } from 'react-router-dom/cjs/react-router-dom.min';
import "bootstrap/dist/css/bootstrap.min.css"
import AddReview from './components/add-review';
import MoviesList from './components/movie-list';
import Movie from './components/movie';
import Login from './components/login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div className="App">
      Hello World
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;
