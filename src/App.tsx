import { Outlet } from "react-router-dom"
import { Header } from "./components/header"

function App() {
  return (
    <main className='dark dark:bg-background dark:text-white bg-background min-h-screen flex flex-col justify-start items-center p-2'>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default App
