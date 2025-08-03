# 🚀 Guía de Inicio Rápido

¡Bienvenido a tu primera aplicación fullstack con React, Next.js y base de datos!

## ⚡ Inicio Rápido (1 comando)

```bash
npm run setup
```

Este comando hará todo automáticamente:
- Instalar dependencias
- Configurar la base de datos
- Crear tablas con Prisma
- Poblar con datos de ejemplo

## 🏃‍♂️ Ejecutar la Aplicación

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎯 ¿Qué puedes hacer?

### ✅ Funcionalidades Básicas
- **Crear tareas**: Usa el formulario en la parte superior
- **Completar tareas**: Marca el checkbox
- **Editar tareas**: Haz clic en el ícono ✏️
- **Eliminar tareas**: Haz clic en el ícono 🗑️
- **Filtrar tareas**: Usa los botones "Todas", "Pendientes", "Completadas"

### 📊 Características Avanzadas
- **Estadísticas en tiempo real**: Ve el progreso en la parte superior
- **Persistencia**: Los datos se guardan en SQLite
- **API REST**: Endpoints disponibles en `/api/tasks`
- **Responsive**: Funciona en móvil y desktop

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev              # Ejecutar en modo desarrollo
npm run build            # Compilar para producción
npm start               # Ejecutar versión de producción

# Base de datos
npm run db:studio       # Abrir interfaz visual de la BD
npm run db:seed         # Agregar datos de ejemplo
npm run db:reset        # Resetear base de datos

# Otros
npm run lint            # Verificar código
```

## 🗄️ Explorar la Base de Datos

```bash
npm run db:studio
```

Esto abrirá Prisma Studio en [http://localhost:5555](http://localhost:5555) donde puedes ver y editar los datos directamente.

## 📁 Archivos Importantes

- `src/app/page.tsx` - Página principal
- `src/app/api/tasks/` - API endpoints
- `src/components/` - Componentes React
- `prisma/schema.prisma` - Esquema de base de datos
- `src/types/task.ts` - Tipos TypeScript

## 🎨 Personalizar la Aplicación

### Cambiar colores:
Edita las clases de Tailwind CSS en los componentes.

### Agregar nuevos campos:
1. Modifica `prisma/schema.prisma`
2. Ejecuta `npm run db:migrate`
3. Actualiza los tipos en `src/types/task.ts`
4. Modifica los componentes

### Cambiar estilos:
Todas las clases de CSS están en los componentes usando Tailwind CSS.

## 🔍 Arquitectura del Proyecto

```
Frontend (React/Next.js)
    ↓ HTTP requests
API Routes (Next.js)
    ↓ Prisma ORM
Database (SQLite)
```

## 🤔 ¿Problemas?

### La aplicación no inicia:
```bash
rm -rf .next
npm run dev
```

### Error de base de datos:
```bash
npm run db:reset
npm run db:seed
```

### Problemas de dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Próximos Pasos

1. **Experimenta**: Agrega, edita y elimina tareas
2. **Personaliza**: Cambia colores y estilos
3. **Extiende**: Agrega nuevas funcionalidades
4. **Aprende**: Revisa el código y entiende cómo funciona

## 🎉 ¡Felicidades!

Has creado tu primera aplicación fullstack. Ahora tienes:
- ✅ Frontend moderno con React
- ✅ Backend con API REST
- ✅ Base de datos funcional
- ✅ Interfaz de usuario atractiva
- ✅ Código TypeScript seguro

¡Sigue experimentando y aprendiendo! 🚀