import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import FormComponent from './Components/FormComponent';
import commonStyles from './Components/styles/commonStyles';

function App() {

  return (
    <Container fluid="md" style={commonStyles.wd50}>
      <Row>
        <Col style={commonStyles.formContainer}>
          <FormComponent />
        </Col>
      </Row>
    </Container>

  )
  
}

export default App;
