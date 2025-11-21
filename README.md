🚀 404 a Marte

1. Briefing del proyecto
   
Nombre: ¡404s a Marte!

Contexto:
Durante la misión de aterrizaje en Marte, los sistemas se oscurecen y aparece una página de error 404: Marte ha desaparecido del sistema solar.
La tripulación debe interactuar con la página mientras esperan comunicación con la Tierra.

Objetivo:
Diseñar y desarrollar una página 404 interactiva y visualmente atractiva, que muestre el espacio y los planetas en movimiento, y que permita manipular la gravedad.
Tecnologías utilizadas: HTML5, CSS3, JavaScript (no se utilizaron bibliotecas externas).


2. Idea escogida
   
- Página 404 ambientada en el espacio:
- Fondo de video con meteoritos flotando.
- Planetas interactivos, distribuidos por la pantalla y flotando de manera natural.
- Mensaje informando de que Marte ha desaparecido.
- Botón Activar/Desactivar Gravedad:
Activado → planetas caen hacia el suelo (simulación de gravedad).
Desactivado → planetas flotan y levitan libremente por toda la pantalla.


3. Organización del código

HTML (index.html):
- Estructura de la página: video de fondo, contenido del mensaje, contenedor de planetas y botón de gravedad.
- Uso de etiquetas semánticas y clases para estilos y scripts.

CSS (style.css):
- Diseño responsive y tipografía pixel (“Press Start 2P”).
- Animaciones:
  1.1 Efecto glitch en el mensaje “ERROR 404”.
  1.2 Flotación suave de planetas.
  1.3 Estilos de botones, planetas y contenedor de contenido.
  1.4 Video de fondo configurado para cubrir toda la pantalla y no interferir con interacciones.

JavaScript (script.js):
- Inicialización de planetas con posición y velocidad aleatoria.
- Función updatePositions():
  1.1 Movimiento continuo de planetas, con rebotes en todos los bordes.
  1.2 Cambio suave de dirección aleatoria (wander) para simular levitación natural.
  1.3 Activación/desactivación de gravedad.
  1.4 Interactividad del botón de gravedad: al desactivarlo, planetas vuelven a levitar; al activarlo, caen simulando gravedad.

  
4. Problemas encontrados y soluciones

Problema 1: Planetas se quedaban agrupados o fijos en el centro.

Causa: Uso de targetY fijo y pequeñas variaciones aleatorias que no distribuían el movimiento por toda la pantalla.

Solución:
- Eliminación de targetY fijo.
- Aplicación de velocidades independientes en X y Y con cambios aleatorios suaves por frame.
- Rebotes activos en todos los bordes.

Problema 2: Movimiento de los planetas a trompicones.

Causa: Cambios aleatorios demasiado grandes en cada frame y poca amortiguación.

Solución:
- Reducir la magnitud del cambio aleatorio (0.2 → 0.05).
- Aplicar amortiguación de la velocidad (0.97) para suavizar movimientos.
- Limitar la velocidad máxima para mantener el movimiento natural.
  
Problema 3 : Activar/desactivar gravedad provocaba movimientos erráticos o que los planetas se quedaran en el suelo.

Solución:
- Al desactivar gravedad, se da un pequeño impulso aleatorio a cada planeta para reiniciar su levitación.
- Rebotes suaves aseguran que no se salgan de la pantalla.


Integrantes del grupo de trabajo:
- Irene Gavidia
- Paula Fernanz
- Paula Miguelez
- María Ugarte
- Nerea Alonso
