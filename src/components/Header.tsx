import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from './Sidebar';

export const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Pesquisando por:', searchQuery);
    };

    return (
        <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            
          
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20 gap-4">

                    <img 
                        src="https://www.infoescola.com/wp-content/uploads/2008/07/sapo-561077704.jpg" 
                        alt="Logo" 
                        className="h-16 cursor-pointer"
                        onClick={() => navigate('/')}
                    />

                
                    <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-purple-600"
                        />
                    </form>

                    <button 
                        onClick={() => navigate('/cart')}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/126/126510.png" 
                            className="h-6"
                        />
                    </button>
                </div>
            </div>

          
       
        </header>
    );
};
 export default Header;