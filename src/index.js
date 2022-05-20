import { createRoot } from 'react-dom/client'

import TodoApp from './todo-app'
import './index.css'

createRoot(document.getElementById('root')).render(<TodoApp tab="home" />)
