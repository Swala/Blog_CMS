import Header from './Header';
import Footer from './Footer';

interface LayoutProps{}

const Layout: React.FC<LayoutProps> = ({ children }) =>{
    return (
    <>
        <Header/>
        <main className="min-h-screen max-w-7xl mx-auto">
            {children}
        </main>
        <Footer/>
    </>
    )}
export default Layout;