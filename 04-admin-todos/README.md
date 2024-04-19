# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos

```
docker compose up -d 
```

2. Renombrar el .env.template a .env

3. Reemplazar los valores user,password y db de url de conexion

4. Ejecutar el SEED para [crar la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate NAME_MIGRATION
mpx prisma generate
```


# Production