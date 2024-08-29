
document.getElementById('citySelector').addEventListener('change', function() {
    const city = this.value;
    const apiUrl = `https://worldtimeapi.org/api/timezone/${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const datetime = data.datetime;
            const timezone = data.timezone;

            // Convert datetime to the local time of the selected city
            const time = new Date(datetime).toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: timezone
            });

            const dataElement = document.querySelector('#timeDisplay data');
            dataElement.setAttribute('value', datetime);
            dataElement.textContent = time;

            console.log('Time:', datetime);
            console.log('Converted time:', time);
            console.log('City selected:', this.value);

            updateBackground(time);      


        })
        .catch(error => {
            console.error('Error fetching the time:', error);
        });
});
function updateBackground(time) {
        setTimeout(() => {
            const body = document.querySelector('body');
            if (time.includes('AM')) {
                body.style.background = 'rgb(152,184,0)';
                body.style.background = 'linear-gradient(0deg, rgba(152,184,0,1) 0%, rgba(0,237,255,1) 78%)';
            } else if (time.includes('PM')) {
                body.style.background = 'rgb(184,80,0)';
                body.style.background = 'linear-gradient(0deg, rgba(184,80,0,1) 0%, rgba(0,67,72,1) 78%)';
            }
        }, 1000);
    }

function saludar(){
    alert("Hola mundo");
}   
const iralInicio = () => {
    scrollTo(0, 0);
};<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wireframe Example</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/main.js" defer></script>

</head>
<body>

<header>
    <div class="container">
        <h1>Título del sitio</h1>
    </div>
</header>

<main class="container">


    <select id="citySelector">
        <option value="">Selecciona una ciudad</option>
        <option value="America/Bogota">Bogotá</option>
        <option value="Europe/Moscow">Moscú</option>
        <option value="Australia/Sydney">Sidney</option>
        <option value="Europe/Paris">París</option>
        <option value="Asia/Tokyo">Tokio</option>
    </select>
    <div id="timeDisplay">
        <span>Hora actual: <data value="">Selecciona una ciudad</data></span>
    </div>
    
    
    <div class="image-container">
        <img src="https://placehold.co/800x360" alt="Imagen de un carro">
    </div>
    
    <div class="text-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
        <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
    </div>
    
    <div class="button-container">
        <div style="background-color: #b3e5fc; padding: 10px;">
            <button onclick="saludar()">Saludar</button>
        </div>
        <div style="background-color: #b6ff0a; padding: 10px;">
            <button onclick="iralInicio()">Ir al inicio</button>
        </div>
    </div>

</div>
</main>

<footer>
<credit>
    <p>Autor: Juan Diego Gutierrez</p>
    </credit>    
</footer>

</body>
</html>