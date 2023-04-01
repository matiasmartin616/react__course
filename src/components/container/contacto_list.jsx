import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class.js';

const ContactoListComponent = () => {
    
    const defaultContacto = new Contacto('Nombre', 'Apellido', 'email@example.com', false);
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de un contacto');
    };

    return (
        <div>
            <h1>
                Your Contacts:
            </h1>
            
            {/* TODO: Aplicar un For/Map para generar una lista de contactos */}
            <ContactoComponent contacto={defaultContacto} />

        </div>
    );
};

ContactoListComponent.propTypes = {
    contactos: PropTypes.arrayOf(PropTypes.instanceOf(Contacto)).isRequired
};

export default ContactoListComponent;

