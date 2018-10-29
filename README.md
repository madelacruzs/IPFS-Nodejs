# IPFS in Nodejs

- Descarga el codigo

       $ git clone https://github.com/madelacruzs/IPFS-Nodejs.git
 
 - Ejecuta en consola (para descargar los paquetes)
 
        npm install
 
 - ejecuta en consola (para ejecutar el proyecto)
 
        node app.js
 
 Listo => http://localhost:10001/api/ipfs

     POST /api/ipfs HTTP/1.1
     Host: localhost:10001
     Content-Type: application/x-www-form-urlencoded
     Cache-Control: no-cache
     Postman-Token: 91449df6-f1bc-46fe-8601-0652f494bf56

     file64=BASE64-FILE&fileName=hola.jpg
     
     
Puedes cargar imagenes a IPFS desde el navegador aquí = https://madelacruzs.github.io/IPFS/index.html

Servicio REST disponible en: https://blockchain-monterrey.herokuapp.com/api/ipfs/
 
