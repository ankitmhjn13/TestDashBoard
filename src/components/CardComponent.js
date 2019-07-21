import React, {Component} from 'react';
import {Card,
  CardColumns, 
  CardBody, 
  CardTitle, 
  CardText, 
  Button,
  CardHeader} from 'reactstrap';
import './../app.css';


class CardCompoennt extends Component{
    constructor(props){
        super(props);
        this.state = {
            rrData: [
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'failed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'failed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
                {
                    'rrNo': 767676,
                    'rrDesc': 'CTRLTECH-908978 (Uncommitted) ANTS iep changes [allTests]',
                    'rrStatus': 'running',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
                {
                    'rrNo': 898989,
                    'rrDesc': 'CTRLTECH-908978 (committed) ANTS iep changes [allTests]',
                    'rrStatus': 'passed',
                    'testCases': '980',
                    'totalTestCases': '1162',
                    'RequestedBy': 'Ankit Mahajan',
                },
            ],
        }
    }

    displayRRComponent(){
        return this.state.rrData.map((val, key) => (
            val.rrStatus === 'failed' ? (
                <Card key={key} >
                    <CardHeader style={{backgroundColor: "#eb3434"}}><b>{val.rrNo}</b></CardHeader>
                    <CardBody>
                        <CardTitle><small>Requested By-</small> <i><u>{val.RequestedBy}</u></i></CardTitle>
                        <CardText>{val.rrDesc}</CardText>
                        <Button>View RR</Button>
                    </CardBody>
                </Card>
            ) : (
                val.rrStatus === 'passed' ? (
                    <Card key={key} >
                        <CardHeader style={{backgroundColor: "#a2eb34"}}><b>{val.rrNo}</b></CardHeader>
                        <CardBody>
                            <CardTitle><small>Requested By-</small> <i><u>{val.RequestedBy}</u></i></CardTitle>
                            <CardText>{val.rrDesc}</CardText>
                            <Button>View RR</Button>
                        </CardBody>
                    </Card>
                ) : (
                    <Card key={key} >
                        <CardHeader style={{backgroundColor: "#ebb134"}}><b>{val.rrNo}</b></CardHeader>
                        <CardBody>
                            <CardTitle><small>Requested By-</small> <i><u>{val.RequestedBy}</u></i></CardTitle>
                            <CardText>{val.rrDesc}</CardText>
                            <Button>View RR</Button>
                        </CardBody>
                    </Card>
                )
            )
        ));
    }

    render(){
        return(
            <CardColumns className="shiftBottom">
                {this.displayRRComponent()}
            </CardColumns>
        );
    }
};

export default CardCompoennt;