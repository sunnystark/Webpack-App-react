import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'

const container:any = document.getElementById('app-root')
const root = createRoot(container)
root.render(<h1>Hello React Production </h1>)

