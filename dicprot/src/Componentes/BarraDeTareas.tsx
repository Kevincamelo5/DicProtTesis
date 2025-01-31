import React from 'react';
import Button from 'react-bootstrap/Button';  // Importamos el componente Button de react-bootstrap
import ButtonGroup from 'react-bootstrap/ButtonGroup';  // Importamos el componente ButtonGroup de react-bootstrap

function BarraDeTareas() {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Importar Archivos</Button>
            <Button variant="secondary">Add Actor</Button>
            <Button variant="secondary">Add Casos de Uso</Button>
        </ButtonGroup>
    );
}

export default BarraDeTareas;