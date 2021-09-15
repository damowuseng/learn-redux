import Home from "../pages/home5";
import About from "../pages/about5";
import Profile from "../pages/profile";
import User from "../pages/user";

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/about',
		component: About,
		routes: [
			{
				path: '/about',
				
			},
		]
	},
	{
		path: 'profile',
		component: Profile
	},
	{
		path: '/user',
		component: User
	},
]

export default routes
