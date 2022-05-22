import React, { useState } from 'react'
import useCourseStore from '../app/courseStore'
import '../App.css'

export const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse)
  const [courseTitle, setCourseTitle] = useState('')

  const handleSubmit = () => {
    if (!courseTitle || courseTitle === '')
      return alert('Please add an course title')
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    })
    setCourseTitle('')
  }
  return (
    <div className="form-container">
      <input
        value={courseTitle}
        className="form-input"
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button className="form-submit-btn" onClick={() => handleSubmit()}>
        Add course
      </button>
    </div>
  )
}
