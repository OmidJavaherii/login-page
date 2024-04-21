import Edit from "./Edit/Edit";
import Profile from "./Profile/Profile";
// import Comments from './Components/Comments/Comments'
// import Users from './Components/Users/Users'
// import Orders from './Components/Orders/Orders'
// import Offs from './Components/Offs/Offs'

const routes = [
    {path: '/edit', element: <Edit />},
    {path: '/', element: <Profile />},
]

export default routes;