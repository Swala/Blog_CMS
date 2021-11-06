import Header from './Header';
import Footer from './Footer';

interface LayoutProps{}

const Layout: React.FC<LayoutProps> = ({ children }) =>{
    return (
    <>
        <Header/>
        <main className="flex flex-col items-center min-h-screen">{children}</main>
        <Footer/>
    </>
    )}
export default Layout;