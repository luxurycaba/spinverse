document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const saludo = document.getElementById("btn-saludo");
  const nombreApodo = document.getElementById("btn-nombreApodo");
  const titular = document.getElementById("btn-titular");
  const alias = document.getElementById("btn-alias");
  const cbu = document.getElementById("btn-cbu");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const acreditadas = document.getElementById("btn-acreditadas");
  const link = document.getElementById("btn-link");
  const bono = document.getElementById("btn-bono");
  const sectorPagos = document.getElementById("btn-sectorPagos");  
  const avisoRetiros = document.getElementById("btn-avisoRetiros");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario

  let inputTitular, inputCBU, inputAlias;
  let firstVisit = true;
  const textos = [
`Ya están! Mucha suerte!! 🍀`,
`✅ Fichas acreditadas 🎉 *Que la suerte te acompañe* 💥🍀`,
`Acreditadas! A romperla!! 🔥🍀`,
`Todo listo! Éxitos!! ✅🍀`,
`Acreditadas! A jugar!! 🎉✅`,
`Cargadas! Mucha suerte 🥰🍀`,
`🎲 ¡Carga exitosa! Ya podés empezar a jugar 🚀 *Muchisima suerte* 💸🍀`,
`Listo!! Ya podes entrar!! ✅`,
`Listoo!! A darlo todo! 💪🍀`,
`✅ Recarga lista, ahora es tu turno de ganar 💥🍀`,
`Ya podes jugar! Éxitos!! 🎮🍀`,
`Acreditadas! Todo tuyo!! 🤞🏻✅`,
`Cargadas!! ✅`,
`💥 Tus fichas ya están listas 💥`,
`Activadas! Que tengas mucha suerte! 🍀🥰`,
`Ya podes arrancar!! A jugar! 🎲✅`,
`Todo listo! Suerte! 🍀`,
`Cargado! Ya podes entrar 😄✅`,
`💥 Operación completada ✅ ¡A disfrutar y ganar! 🍀`,
`A darle!! Que sea con suerte!! 🤞🏻💫`,
`Ya están listas!! 🍀✅`,
`Suerteee!! Ya podes jugar! 🤩🍀`,
`🎉 Recarga procesada ✅ *¡Muchísima suerte en tus jugadas!* 🍀`,
`Todo ok! A jugar!! 🥳`,
`Acreditado! Vamos con todo! 💪✅`,
`Dale nomas! Ya están cargadas! 👌🍀`,
`Acreditadas! Que la suerte te acompañe! ✨`,
`🎉 Fichas acreditadas con éxito 🎉 *Que la suerte este de tu lado* 🍀💸`,
`Ya está acreditado! Éxitos! 💥🍀`,
`Acreditadass!! Todo listo! 🎉🍀`,
`Acreditadas!! ✅`,
`🚀 Ya tenés tus fichas activas ✅ *Muchos exitosss* 💸🤑`,
`Ya estan cargadas! A jugar!! ✅`,
`Listo acreditado! Suerte!! 🤞🏻🍀`,
`Ya podes arrancar! Mucha suerte! 🚀🍀`,
`✅ Acreditadas! A romperla!! 💥`,
`🎰 ¡Listo para jugar! Tus fichas están cargadas 🔥 *Mucha suerte* 🍀`,
`Listo, ya podes empezar! 🎮🍀`,
`Ya te acredite! A jugar!! 🥰✅`,
`Todo listo! *Mucha suerte!!* 🌟🍀`,
`🎲 *¡Ya podés apostar!* Tus fichas fueron cargadas ✅`
  ];
  let textoIndex = 0;

  const saludos = [
`Holuu, buenass!! 🙌🏻 `,
`Buenas!! 🙋🏼‍♀️`,
`Holii buenas!! 😝`,
`Holuuu!! 😝`,
`Buenass 💕`,
`Holu buenas, como estas?? 🤗`,
`Holaa buenas!! 🥰`,
`Holii!! 🥰`,
`Bueenass!!! 🤩`,
`Hola buenass!! 🙌🏻`,
`Buenas buenass!! 💕`,
`Holuu buenas!! ☺️`,
`Holaaa!! 🤩`,
`Hola!! 🙌🏻 `,
`Holuu! 🥰`,
`Holu como te va?? 🤗`,
`Holaa!! 😝`,
`Buenass!! ☺️`,
`Holaa buenas!! 😁`,
`Buenas buenas!! 😝`
  ];
  let saludosIndex = 0;

  const links = [
`www.463.life`,
`Accedé a: 463.life`,
`https://www.463.life`,
`Link: www.463.life`,
`Ingresá a: 463.life`,
`http://463.life`,
`Te dejo el link: 🔗 463.life`,
`463.life`,
`Página web: 👑 463.life 👑`,
`El link es: http://463.life`,
`https://463.life`,
`Sitio web: 🔗 463.life`,
`Accedé a: 👑 463.life 👑`,
`Ingresá a: www.463.life`,
`Te dejo el link: 👑 463.life 👑`,
`Link: 👑 463.life 👑`,
`Accedé a: www.463.life`,
`🔗 463.life`,
`Ingresá a: http://463.life`,
`El link es: www.463.life`,
`Accedé a: 🔗 463.life`,
`Link: https://463.life`,
`https://463.life`,
`Ingresá a: 👑 463.life 👑`,
`Página web: www.463.life`,
`El link es: 🔗 463.life`,
`463.life`,
`Te dejo el link: 463.life`,
`Ingresá a: 🔗 463.life`,
`Link: https://463.life`,
`Te dejo el link: www.463.life`,
`👑 463.life 👑`,
`http://463.life`,
`El link es: 463.life`,
`Página web: https://463.life`,
`463.life`,
`Link: 🔗 463.life`,
`www.463.life`,
`Te dejo el link: www.463.life`,
`Accedé a: 463.life`
  ];
  let linksIndex = 0;

  const sectorPagosMensajes = [
`¡Genial! 🙌 Ya con tus datos, te paso con nuestro sector de pagos 💸
En instantes te van a estar transfiriendo tu premio. *¡Felicidades!* 🥳✨`,
`Buenísimo 😄 Gracias por la info, te derivo con el área de pagos ahora mismo 💥
Van a estar acreditando tu premio al instante. *¡Felicitaciones!* 🎉🤑`,
`¡Perfecto! Con eso ya estás 🙌
Te paso con nuestro equipo de pagos para que recibas tu premio en minutos 🎁
*¡Te felicito!* 🎰💖`,
`Gracias por los datos 😍
Ahora te derivo directamente con quien abona los premios para que lo recibas ya mismo 💸
*¡Disfrutalo!* 🎊`,
`¡Listo! Ya con eso te paso al sector de premios 🎁
En breve vas a estar recibiendo tu ganancia. *¡Felicitaciones campeón/a!* 🥰🔥`,
`¡Excelente! 😍 Gracias por enviarme todo, ahora te derivo con el sector que realiza los pagos 💸
En unos minutos vas a estar recibiendo tu premio. *¡Felicitaciones!* 🎰💥`,
`¡Perfecto! 🙌 Ya con esos datos, te paso con la persona encargada de abonar los premios 🎁
En breve vas a tener tu transferencia. *¡Qué buena jugada hiciste!* 🤑🔥`,
`¡Gracias por la info! 💬
Te derivo al instante con el área de pagos para que te hagan la transferencia 🧾
*¡Disfrutá tu premio, te lo ganaste!* 💃💰`
  ];
  let sectorPagosMensajesIndex = 0;

  const nombreApodoTextos = [
  "¿Me pasás tu nombre o apodo así genero tu usu4rio?",
  "Necesito un nombre o apodo para crear tu usu4rio 😊",
  "Para continuar, decime cómo querés que aparezca tu usu4rio (nombre o apodo).",
  "¿Cómo te gustaría que te llamemos? Con tu nombre o apodo creo el usu4rio.",
  "Antes de seguir, pasame un nombre o apodo para armar tu usu4rio.",
  "¿Tenés un nombre o apodo que prefieras? Lo uso para generar tu usu4rio.",
  "Necesito tu nombre o apodo para crear el usu4rio y seguimos.",
  "¿Qué nombre o apodo querés usar para tu usu4rio?",
  "Te pido un nombre o apodo así te genero el usu4rio en un momento."
];
  let nombreApodoTextosIndex = 0;

  // Funcion para copiar texto al portapapeles
  function copyToClipboard(text) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = text;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }

  saludo.addEventListener("click", () => {
    copyToClipboard(saludos[saludosIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    saludosIndex = (saludosIndex + 1) % saludos.length;
  });

  nombreApodo.addEventListener("click", () => {
    copyToClipboard(nombreApodoTextos[nombreApodoTextosIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    nombreApodoTextosIndex = (nombreApodoTextosIndex + 1) % nombreApodoTextos.length;
  });

  link.addEventListener("click", () => {
    copyToClipboard(links[linksIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    linksIndex = (linksIndex + 1) % links.length;
  });

  sectorPagos.addEventListener("click", () => {
    copyToClipboard(sectorPagosMensajes[sectorPagosMensajesIndex]);
  
    // Avanzar al siguiente saludo (y volver al principio si es el último)
    sectorPagosMensajesIndex = (sectorPagosMensajesIndex + 1) % sectorPagosMensajes.length;
  });

  titular.addEventListener("click", () => {
    const texto = `La cuenta figura a nombre de *${inputTitular}* 🥰🍀

Recordá porfavor 🙏🏼 *enviar debajo del comprobante TU USUARIO ASIGNADO 🙏🏼 para agilizar la carga de fichas* de lo contrario no podremos cargar tu saldo 🚫�
`;
    copyToClipboard(texto);
  });

  alias.addEventListener("click", () => {
    const texto = `${inputAlias}`;
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    copyToClipboard(textos[textoIndex]);
  
    // Avanzar al siguiente texto (y volver al principio si es el último)
    textoIndex = (textoIndex + 1) % textos.length;
  });

  bono.addEventListener("click", () => {
    const texto = `⬇️ *INFO IMPORTANTE* ⬇️
 
📣 Los juegos que permiten usar la bonificación se encuentran en la sección Juegos con Wager !!
En caso de no usar la bonificación, no es posible retirarla 🚫`;
    copyToClipboard(texto);
  });

  avisoRetiros.addEventListener("click", () => {
    const texto = `El horario de pagos ya finalizó, retiros y pagos nuevamente a partir de las 12:00PM. Luego de ese horario envie sus datos para el retiro así la cajera de turno le envia su premio!! ⏱️`;
    copyToClipboard(texto);
  });  

  sistemaDePagos.addEventListener("click", () => {
    const texto = `*Nuestro cronograma* : 

♦️ Días hábiles: De 12:00hs a 04:00hs 
♦️ Fines de semana: De 12:00hs a 06:00hs
♦️Mínimo de retiro: $3.000

 *Importante* ‼⬇

♦️ Usuario que retire desde $3.000 a $30.000 puede realizar un retiro mas en el día.

♦️ Para retiros superiores a $30.000, se permite solo un retiro diario.

💥 *MAXIMO DE RETIRO DEPENDIENDO DE LA CARGA* ⬇️⬇️

♦️Si la carga es menor a 50.000 puede retirar hasta 100.000 diarias 💪🏼

♦️Si la carga es a partir de 50.000 puede retirar hasta 150.000 🫰🏼

♦️Si la carga es a partir de 100.000 puede retirar hasta 200.000 diarios 🙌🏻
`;
    copyToClipboard(texto);
  });

  // Función para abrir y cerrar el overlay del menú hamburguesa
  hamburguesaToggle.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
      overlay.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlay.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay del primer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !firstVisit) {
      // Verifica si la tecla presionada es Escape
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del segundo menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del tercer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    inputAlias = document.getElementById("alias").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `¡Bienvenid@ a SPINVERSE c4sin0! 🎰🔥 Tu suerte arranca HOY 🍀🫰🏼

💥 *200% de b0n0 de regalo en tu primer deposito*💃

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

L1NK: https://463.life 🫰🏼

🔺M1n1mo de c4rg4: *$1.000*
🔺M1n1m0 de retiro: *$3.000*
🔺Atencion las 24 hs 🕒
🔺Consultar cr0nogr4ma de pagos‼️
🔺B0nus en todas tus c4rgas diarias 💃🥳

Te envio 4li4s? confirmame 🥰
`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `✅ USUARIO REGISTRAD@ ✅ 

Sitio web: https://463.life 🎰

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

Te envió Alias? confírmame 🥰🍀
`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });
});




