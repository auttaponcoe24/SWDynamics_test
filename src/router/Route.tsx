import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import LayoutPage from "../page/LayoutPage";
import FormPage from "../page/FormPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "layout-page", element: <LayoutPage /> },
			{ path: "form-page", element: <FormPage /> },
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
