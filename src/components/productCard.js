import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const productCard = (props) => {
    const product = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
        </Card>
    );
};

export default productCard;