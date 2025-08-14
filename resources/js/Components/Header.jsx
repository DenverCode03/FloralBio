import { useState } from "react"


export default function Header() {
    
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const services = [
        {
            key: "1", name: 'Programme Neriah', link: '/services/programme_neriah'
        },
        {
            key: "2", name: 'Produits detox', link: '/services/programme_detox'
        },
        {
            key: "3", name: 'Poduits prostate', link: '/services/programme_prostate'
        },
        {
            key: "4", name: 'Produits ferti', link: '/services/programme_ferti'
        },
    ]
    return (
        <div>
             {/* Header */}
             <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900">FloralBio</h1>
                            </div>
                        </div>
                        
                        <nav className="hidden md:flex space-x-8">
                            <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors">Accueil</a>
                            <div className="relative group">
                                <p className="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
                                    Services
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="py-2">
                                        {services.map((service) => (
                                            <a
                                                key={service.key}
                                                href={service.link}
                                                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                            >
                                                {service.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href="/blog/accueil" className="text-gray-700 hover:text-primary-600 transition-colors">Blog</a>
                            <a href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
                        </nav>
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile menu */}
                    <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors">Accueil</a>
                            
                            <div className="relative">
                                <button
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                                >
                                    Services
                                    <svg className={`w-4 h-4 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className={`${mobileServicesOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
                                    {services.map((service) => (
                                        <a
                                            key={service.key}
                                            href={service.link}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            {service.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            <a href="/blog/accueil" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors">Blog</a>
                            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors">Contact</a>
                        </div>
                    </div>
                        

                        {/* <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-700 hover:text-primary-600 transition-colors"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                                    >
                                        S'inscrire
                                    </Link>
                                </>
                            )}
                        </div> */}
                    
                </div>

            </header>

            {/* Bouton WhatsApp flottant */}
            <div className="fixed bottom-6 right-6 z-50">
                <a 
                    href="https://wa.me/p/6650629218384742/237670707080 " 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-pulse"
                    style={{
                        animation: 'scaleInOut 2s infinite'
                    }}
                >
                    <svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                    </svg>
                </a>
            </div>

            
            <style jsx>{`
                @keyframes scaleInOut {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </div>
    )
}