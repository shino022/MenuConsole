import Home from 'layout/Home';
import Landing from 'pages/home/Landing';

const HomeRoute = {
  path: '/home',
  element: <Home />,
  children: [
    {
      path: '',
      element: <Landing />
    }
  ]
};

export default HomeRoute;
