const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Sembrando datos de ejemplo...')

  // Limpiar datos existentes
  await prisma.task.deleteMany()

  // Crear tareas de ejemplo
  const tasks = await prisma.task.createMany({
    data: [
      {
        title: 'Aprender React',
        description: 'Completar el tutorial oficial de React y crear mi primer componente',
        completed: true
      },
      {
        title: 'Configurar base de datos',
        description: 'Instalar y configurar PostgreSQL o SQLite con Prisma',
        completed: true
      },
      {
        title: 'Crear API REST',
        description: 'Implementar endpoints para CRUD de tareas usando Next.js API routes',
        completed: false
      },
      {
        title: 'Diseñar interfaz de usuario',
        description: 'Crear componentes React con Tailwind CSS para una UI moderna',
        completed: false
      },
      {
        title: 'Implementar autenticación',
        description: 'Agregar sistema de login y registro de usuarios',
        completed: false
      },
      {
        title: 'Desplegar aplicación',
        description: 'Subir la aplicación a Vercel o Netlify para producción',
        completed: false
      }
    ]
  })

  console.log(`✅ Se crearon ${tasks.count} tareas de ejemplo`)

  // Mostrar estadísticas
  const totalTasks = await prisma.task.count()
  const completedTasks = await prisma.task.count({ where: { completed: true } })
  const pendingTasks = await prisma.task.count({ where: { completed: false } })

  console.log(`📊 Estadísticas:`)
  console.log(`   Total: ${totalTasks}`)
  console.log(`   Completadas: ${completedTasks}`)
  console.log(`   Pendientes: ${pendingTasks}`)
}

main()
  .catch((e) => {
    console.error('❌ Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })