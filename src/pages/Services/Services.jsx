import React from 'react';
import Lifedatacard from '../Services/Lifedataanalysis/Lifedata';
import Reliabilitycard from './RAE/RAE';
import Reliabilitytesting from './Reliabilitytesting/Reliabilityss';


export default function ActionAreaCard() {
 
    return (
        <div style={{ backgroundColor: '#E7E9EB', paddingBottom: '30px' }} >
            <Lifedatacard />
            <Reliabilitycard />
            <Reliabilitytesting />          
        </div>
    );
}
