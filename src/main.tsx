import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App16 from './App16.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App16 />
  </StrictMode>,
)
