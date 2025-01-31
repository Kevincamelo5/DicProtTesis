import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function AcercaDe() {
    return (
        <div>
            <h1>Acerca de</h1>
            <p>Esta es una aplicación de ejemplo para mostrar cómo se puede usar React con TypeScript y React-Bootstrap.</p>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>Acerca del programa.</h3>
                        <p>Este es el primer slide del carousel.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <ExampleCarouselImage text="Second slide" />
                    <Carousel.Caption>
                        <h3>Acerca de los diagramas de casos de uso.</h3>
                        <p>Este es el segundo slide del carousel.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Acerca de los prototipos.</h3>
                        <p>Este es el tercer slide del carousel.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default AcercaDe;

// correccion de error en el archivo App.js