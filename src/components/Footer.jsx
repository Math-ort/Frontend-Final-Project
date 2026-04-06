import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <h4>Atención al cliente</h4>
          <p>(+34) 000 01 02 03</p>
          <ul>
            <li>Servicio al cliente</li>
            <li>Guía de tallas</li>
            <li>Guía de cuidado del calzado</li>
            <li>Formulario de contacto</li>
            <li>Devoluciones</li>
            <li>Estado del pedido</li>
            <li>Envío</li>
            <li>Pago</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li>Nuestra historia</li>
            <li>Responsabilidad corporativa</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>


        <div className="footer-col">
          <h4>Comprar</h4>
          <ul>
            <li>Descuento estudiantes</li>
            <li>Promociones actuales</li>
          </ul>
        </div>


        <div className="footer-col newsletter">
          <h4>Conéctate con nosotros</h4>
          <p>
            Suscríbete a nuestro boletín y recibe un 15 % de descuento en tu
            primer pedido al gastar 120 € en artículos no rebajados.
          </p>

          <input
            type="email"
            placeholder="Introduce tu correo electrónico"
          />
          <button>Suscribirse</button>

          <p className="small-text">
            Al enviar tu dirección de correo electrónico, te estás suscribiendo
            a nuestro boletín. Consulta nuestra Política de Privacidad para más
            información.
          </p>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>España</p>
        <p>© 2026 Reservados todos los derechos.</p>

        <div className="links">
          <span>Política de Privacidad</span>
          <span>Condiciones De Uso</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  );
}