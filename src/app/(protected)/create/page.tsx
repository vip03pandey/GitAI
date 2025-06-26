"use client"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormInput = {
  repoUrl: string,
  projectName: string,
  githubToken: string
}

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>()

  function onSubmit(data: FormInput) {
    console.log(data)
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-8 w-full h-full">
      <img
        src="github.png"
        alt="GitHub Logo"
        className="h-40 w-auto md:h-56"
      />

      <div className="w-full max-w-md">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl mb-1">Link your GitHub Repository</h1>
          <p className="text-sm text-muted-foreground">
            Enter your GitHub repository URL and we'll create a new project for you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <Input
            {...register('repoUrl', { required: true })}
            placeholder="Repository URL"
            className="w-full"
          />
          <Input
            {...register('projectName', { required: true })}
            placeholder="Project Name"
            className="w-full"
          />
        </form>
      </div>
    </div>
  )
}

export default CreatePage
