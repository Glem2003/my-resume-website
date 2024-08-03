import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react'

//components
import { Loading, NotFound } from "../components/common"

//Lazy load
const About = lazy(() => import("../pages/about/about"))
const Resume = lazy(() => import("../pages/resume/resume"))
const Projects = lazy(() => import("../pages/projects/projects"))
const Login = lazy(() => import("../pages/login/login"))

//Routes Config
const routes = [
    { path: '/', element: <About />, index: true },
    { path: '/Resume', element: <Resume /> },
    { path: '/Projects', element: <Projects /> },
    { path: '/Login', element: <Login /> },
    { path: "*", element: <NotFound /> }
]

const AppRoute = () => {
    return (
        <BrowserRouter basename="/my-website">
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routes.map(({ path, element, index }) => (
                        <Route key={path} path={path} element={element} index={index} />
                    ))}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoute