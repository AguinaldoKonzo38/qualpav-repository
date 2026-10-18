import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from "./component/header/Header"
import Homepage from "./pages/homepage/Homepage"
import Footer from "./component/footer/Footer"
import AboutPage from "./pages/about-us/About-us"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/about-us",
        element: <AboutPage />
      }
    ]
  }
])
function App() {

  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
