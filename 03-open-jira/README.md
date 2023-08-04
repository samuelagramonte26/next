# Next js OpenJira App

Para correr localmente, se necesita la base de datos 

```
docker-compose up -d
```

* El -d, significa __detached__ es decir que no siga ejecutandose en la consola

* MongoDB URL local:


```
mongodb://localhost:27017/entriesdb
```

# Variables de entorno

configurar archivo .env.temlate para ls variables de entorno

* Para configurar variables de entorno visibles en el navegador se utilizra NEXT_PUBLIC_ seguido de el nombre de la vriable las demas seran solo visibles desde el lado del servidor.