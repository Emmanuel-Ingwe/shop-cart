import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from "../CartContext";
import { useContext } from "react";

const ProductCard = (props) => {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

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

export default ProductCard;