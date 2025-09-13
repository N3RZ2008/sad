import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Menu from "./components/Menu"
import SignUp from "./components/Signup"
import './App.css'
import AuthProvider from "./components/AuthProvider"

function Layout() {
	return <>
		<AuthProvider>
			<Menu />
			<Outlet />
		</AuthProvider>
	</>
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: "/", element: <Homepage /> },
			{ path: "/signup", element: <SignUp /> },
			{ path: "/login", element: <Login /> },
			{ path: "/logout", element: <Login logout={true} /> },
		]
	}
])

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
