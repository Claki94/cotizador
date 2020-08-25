import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {primeraMayuscula} from '../helper';

const ContenedorResumen = styled.div`
    padding: 2rem;
    text-align: center;
    background-color: #00839F;
    color: #FFF;
    margin-top: 1rem;

    h2 {
        margin: 0;
        padding-bottom: 1rem;
    }
`;

const Resumen = ({datos}) => {

    // extraer datos
    const {marca, year, plan} = datos;

    if(!marca || !year || !plan) return null;

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Coche: {year}</li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;