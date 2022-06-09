import Home from '../pages/Home';
import Post from '../pages/Post';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/post', component: Post },
    { path: '/search', component: Post },
];
