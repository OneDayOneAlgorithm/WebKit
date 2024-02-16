import { Button, Stack, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const BootstrapEx = ()=>{
    return (<div>
            <h1>Todo List</h1>
              <InputGroup className="mb-3">
                <Form.Control placeholder="해야 할 일을 입력 하세요"
                    aria-label="해야 할 일을 입력 하세요"
                    aria-describedby="basic-addon2" />
                    <Button variant="outline-secondary" id="saveBtn">Save</Button>
            </InputGroup>

            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
            </tbody>
            </Table>

    </div>);
}

export default BootstrapEx;