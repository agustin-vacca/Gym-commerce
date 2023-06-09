const transporter = require("../NodeMailer/Nodemailer.js");

const PostUserMailer = async (name, given_name, family_name, email, email_verified, picture, sub) => {
  await transporter.sendMail({
    from: '"Cardigan" <cardigangymproducts@gmail.com>', // sender address
    to: email, // list of receivers
    subject: `Creacion de usuario -> Cardigan`, // Subject line
    text: "", // plain text body
    html: `<p> Hola, ${name}! <p> Tu cuenta ha sido creada con éxito y ahora eres parte de la comunidad de Cardigan. <a href="http://localhost:3000/home">Aquí</a> podrás encontrar todo lo que necesitas para armar tu gimnasio de tus sueños.</p>
        <p>Los datos registrados son los siguientes:</p>
        <div><p> Nombre: ${given_name} </p><p> Email: ${email}</p></div>
        <p>Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. cardigangymproducts@gmail.com</p> 
        <p>¡Gracias por ser parte de nuestra comunidad Cardigan!</p></p>
        `, // html body
  });
};
module.exports = PostUserMailer;
