'use client'

import { useState } from 'react'
import { Task, UpdateTaskData } from '@/types/task'

interface TaskItemProps {
  task: Task
  onUpdate: (id: number, data: UpdateTaskData) => Promise<void>
  onDelete: (id: number) => Promise<void>
  isLoading?: boolean
}

export default function TaskItem({ task, onUpdate, onDelete, isLoading = false }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editDescription, setEditDescription] = useState(task.description || '')

  const handleToggleComplete = async () => {
    await onUpdate(task.id, { completed: !task.completed })
  }

  const handleEdit = async () => {
    if (isEditing) {
      // Guardar cambios
      await onUpdate(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim() || undefined
      })
      setIsEditing(false)
    } else {
      // Entrar en modo edición
      setIsEditing(true)
    }
  }

  const handleCancel = () => {
    setEditTitle(task.title)
    setEditDescription(task.description || '')
    setIsEditing(false)
  }

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      await onDelete(task.id)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
      task.completed ? 'border-green-500 bg-green-50' : 'border-blue-500'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            disabled={isLoading}
            className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  rows={2}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descripción..."
                />
              </div>
            ) : (
              <div>
                <h3 className={`font-medium ${
                  task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                }`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className={`text-sm mt-1 ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-600'
                  }`}>
                    {task.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Creado: {formatDate(task.createdAt)}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-2 ml-4">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                disabled={isLoading || !editTitle.trim()}
                className="text-green-600 hover:text-green-800 disabled:opacity-50"
              >
                ✓
              </button>
              <button
                onClick={handleCancel}
                disabled={isLoading}
                className="text-gray-600 hover:text-gray-800 disabled:opacity-50"
              >
                ✕
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                disabled={isLoading}
                className="text-blue-600 hover:text-blue-800 disabled:opacity-50"
              >
                ✏️
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="text-red-600 hover:text-red-800 disabled:opacity-50"
              >
                🗑️
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}