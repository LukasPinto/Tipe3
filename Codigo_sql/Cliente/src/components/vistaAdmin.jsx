import React from 'react';
import { Form, Button, Table, Badge } from 'react-bootstrap';

const VistaGeneral = (props) => {
    return (
        <>
            <div className="bg-light"  style={{backgroundColor: 'red'}}>
                <Form >

                    <Form.Group className="col-md-7 offset-md-1">

                        <Button variant="primary" type="submit" className="col-md-5">
                            Listado de direcciones
                        </Button>

                    </Form.Group>

                    <Form.Group className="col-md-4 offset-md-7">

                        <Button variant="primary" type="submit" className="col-md-8">
                            Ordenar
                        </Button>

                    </Form.Group>

                    <div>
                        <Table striped bordered hover size="s">
                            <thead>
                                <tr>
                                    <th>Nombre de direccion</th>
                                    <th>Gestionar Expediente</th>
                                    <th>Expediente Actual</th>
                                    <th>Gestionar Usuario usuario</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Direccion de deporte</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                    <td><Button variant="primary">Ver</Button>{' '}</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>

                                </tr>
                                <tr>
                                    <td>Direccion de transito</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                    <td><Button variant="primary">Ver</Button>{' '}</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                </tr>
                                <tr>
                                    <td>Direccion de Artes</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                    <td><Button variant="primary">Ver</Button>{' '}</td>
                                    <td><Button variant="primary">Gestionar</Button>{' '}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Form>
                <Button variant="primary">Crear direccion</Button>{' '}
            </div>
        </>

    );
};


export default VistaGeneral;