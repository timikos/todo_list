import { createRoot } from 'react-dom/client'

import TodoApp from './todo-app'

createRoot(document.getElementById('root')).render(<TodoApp tab="home" />)
