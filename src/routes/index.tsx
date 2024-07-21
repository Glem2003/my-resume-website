import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { lazy, Suspense } from 'react'

//Lazy load
const About = lazy(() => import("../pages/about/about"))
const Resume = lazy(() => import("../pages/resume/resume"))
const Projects = lazy(() => import("../pages/projects/projects"))

//Routes Config
const routes = [
    { path: '/', element: <About />, index: true },
    { path: '/Resume', element: <Resume /> },
    { path: '/Projects', element: <Projects /> },
    { path: "*", element: <About /> }
]

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<></>}>
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