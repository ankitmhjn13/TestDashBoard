import React, {Component} from 'react';
//import TimeLineView from './components/TimeLineView';
import TimeLineEvent from './components/react-event-timeline';
import Header from './components/Header';
import CardCompoennt from './components/CardComponent';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {

  render(){
    return (
      <Container>
        <Row>
          <Col className="elemBottomMargin">
            <Header />
          </Col>
        </Row>
        
        <Row>
          <Col md={3}>
            <TimeLineEvent />
          </Col>
          
          <Col md={8}>
            <Row>
              <CardCompoennt />
            </Row>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default App;
