import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

const FORM_ID = 'payment-form'

export default function Product ({items}) {
    const {id} = useParams()

    const obtenerPreferencias = useCallback(
        async() => {
            const res = await fetchCToken(`http://localhost:3001/mercadopago/payment/${id}`,{items}, 'POST')
            if(res.global){
                const script = document.createElement('script');
                script.type = 'text/javascipt';
                script.src = 'https://www.mercadopago.com.ar/intergrations/v1/web-payment-checkout.js';
                script.setAttribute('data-preference-id', res.global);
                const form = document.getElementById(FORM_ID);
                form.appendChild(script);
            }
        }, [id, items],
)
useEffect(()=>{
    obtenerPreferencias()
},[obtenerPreferencias])

return (
    <form id={FORM_ID} method="GET"/>
)
    
}