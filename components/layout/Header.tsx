interface HeaderProps{}

const Header: React.FC <HeaderProps> =({})=>{
    return (
        <div>
            <h1 className="mx-auto text-center h-16 flex items-center justify-center bg-gradient-to-b from-indigo-800">
                Header</h1>
        </div>
    )
};

export default Header;