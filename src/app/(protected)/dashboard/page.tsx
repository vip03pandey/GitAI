"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  const { user } = useUser()
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.firstName}!</p>
    </div>
  )
}

export default Dashboard