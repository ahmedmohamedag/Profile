import { RouterProvider } from "react-router-dom"
import router from './routes/index';

const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
