# API de pruebas para HEROKU
## Sesion 20220711
### Pasos a seguir:
1. abrir carpeta en *Visual Studio code*
2. abrir terminal
3. usar **cd src** y **node index.js**
4. abrir postman y usar una de las siguientes peticiones:
- POST localhost:8000/api/registro?userName=*(nombre)*&password=*(contraseña)*&email=*(email)*
- GET localhost:8000/api/login?userName=*(nombre)*&password=*(contraseña)*
- POST localhost:8000/api/rMascotas?mascotName=*(nombre)*&description=*(descripción detallada)*
> algunas peticiones sólo funcionarán si se usa primero la petición "sign-up" o "login" y se recupera el token
