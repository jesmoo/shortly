import React from 'react'
import {ContactContainer} from './Contact.style'
const Contact = () => {
  return (
		<ContactContainer>
			<h2>Si deseas contactarnos lo puedes hacer con el siguiente boton</h2>
			<button>
				<a href="mailto: habidmoo@gmail.com">Contactar</a>
			</button>
		</ContactContainer>
  );
}

export default Contact