# 📝 Mi Lista de Tareas

Una aplicación fullstack moderna para gestionar tareas, construida con Next.js, React, TypeScript, Prisma y SQLite.

## 🚀 Características

- ✅ Crear, editar y eliminar tareas
- ✅ Marcar tareas como completadas
- ✅ Filtrar tareas por estado (todas, pendientes, completadas)
- ✅ Estadísticas en tiempo real
- ✅ Interfaz moderna y responsive
- ✅ Base de datos SQLite con Prisma ORM
- ✅ API REST con Next.js App Router
- ✅ TypeScript para mayor seguridad de tipos

## 🛠️ Stack Tecnológico

- **Frontend**: React 18, Next.js 14, TypeScript
- **Estilos**: Tailwind CSS
- **Base de datos**: SQLite
- **ORM**: Prisma
- **API**: Next.js API Routes

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone <tu-repositorio>
cd todo-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura la base de datos:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. Ejecuta la aplicación en modo desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
todo-app/
├── src/
│   ├── app/
│   │   ├── api/tasks/          # API Routes para CRUD
│   │   ├── globals.css         # Estilos globales
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página principal
│   ├── components/
│   │   ├── TaskForm.tsx        # Formulario para crear tareas
│   │   └── TaskItem.tsx        # Componente de tarea individual
│   ├── lib/
│   │   └── prisma.ts           # Cliente de Prisma
│   └── types/
│       └── task.ts             # Tipos TypeScript
├── prisma/
│   ├── schema.prisma           # Esquema de base de datos
│   └── migrations/             # Migraciones
├── docker-compose.yml          # Configuración Docker (opcional)
└── README.md
```

## 🎯 Uso

### Agregar una tarea:
1. Completa el formulario con el título (obligatorio) y descripción (opcional)
2. Haz clic en "Agregar Tarea"

### Gestionar tareas:
- **Completar**: Marca el checkbox junto a la tarea
- **Editar**: Haz clic en el ícono de lápiz ✏️
- **Eliminar**: Haz clic en el ícono de papelera 🗑️

### Filtrar tareas:
- **Todas**: Muestra todas las tareas
- **Pendientes**: Solo tareas sin completar
- **Completadas**: Solo tareas completadas

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Ejecutar versión de producción
npm start

# Linting
npm run lint

# Comandos de Prisma
npx prisma studio          # Interfaz visual de la base de datos
npx prisma migrate dev      # Crear nueva migración
npx prisma generate         # Generar cliente de Prisma
```

## 🌐 API Endpoints

- `GET /api/tasks` - Obtener todas las tareas
- `POST /api/tasks` - Crear nueva tarea
- `GET /api/tasks/[id]` - Obtener tarea específica
- `PUT /api/tasks/[id]` - Actualizar tarea
- `DELETE /api/tasks/[id]` - Eliminar tarea

## 🎨 Personalización

### Cambiar colores:
Edita las clases de Tailwind CSS en los componentes para cambiar la paleta de colores.

### Agregar nuevos campos:
1. Actualiza el esquema en `prisma/schema.prisma`
2. Ejecuta `npx prisma migrate dev`
3. Actualiza los tipos en `src/types/task.ts`
4. Modifica los componentes según sea necesario

## 🐛 Solución de Problemas

### Error de base de datos:
```bash
npx prisma migrate reset
npx prisma migrate dev --name init
```

### Problemas con TypeScript:
```bash
npm run build
```

### Limpiar caché:
```bash
rm -rf .next
npm run dev
```

## 📝 Próximas Características

- [ ] Autenticación de usuarios
- [ ] Categorías de tareas
- [ ] Fechas de vencimiento
- [ ] Notificaciones
- [ ] Exportar tareas
- [ ] Modo oscuro

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¡Disfruta organizando tus tareas! 🎉
