import HomePage from './pages/home/HomePage';
import CompanyPage from './pages/company/CompanyPage'

const Route = (path, component) => { return {path, component} };

const RouteArray = [
    Route('/home', HomePage),
    Route('/lavasul', CompanyPage)
];

export default RouteArray;