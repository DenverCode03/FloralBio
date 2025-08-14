import { Head, Link, } from '@inertiajs/react';
import { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Welcome({ auth }) {


    return (
        <>
            <Head title="" />

            <Header></Header>
            {/* Hero Section */}
            <section id="accueil" className="bg-[url('/images/fond.jpg')] py-20">
                <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:p-8 text-white bg-white/40 rounded-lg">
                    <div className="grid lg:grid-cols-1 gap-12 md:max-w-xl lg:max-w-2xl text-center mx-auto items-center">
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">
                                La nature au service de votre 
                                <span className="text-primary-600"> bien-être</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Découvrez notre gamme de produits de santé naturels à base de plantes, 
                                soigneusement sélectionnées pour leurs propriétés thérapeutiques exceptionnelles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <a href="#produits">
                                    <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
                                        Découvrir nos produits
                                    </button>
                                </a>
                                {/* <button className="border-2 border-secondary-600 text-secondary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-50 transition-colors">
                                    En savoir plus
                                </button> */}
                            </div>
                        </div>
                        {/* <div className="relative">
                            <div className="bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-lg">Image produit à venir</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
    
            {/* A propos */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Qui sommes nous ?</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une sélection rigoureuse de plantes médicinales transformées selon les plus hauts standards de qualité
                        </p>
                    </div>
                    
                    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                    </div> */}
                </div>
            </section>
            {/* Section Produits */}
            <section id="produits" className="py-20 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Nos services</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une sélection rigoureuse de plantes médicinales transformées selon les plus hauts standards de qualité
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-8">
                        {/* Produit 0 */}
                        <div className="bg-white rounded-2xl relative shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-white h-56 flex items-center justify-center">
                                <img src="images/detoxr.jpg" alt="Produit de detox" className="h-full"/>
                            </div>
                            <div className="p-6 mb-10">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Programme Neriah</h4>
                                <p className="text-gray-600 mb-4">Programme de suivie des habitudes alimentaires en vue d'une perte efficace de poids</p>
                            </div>
                            <div className="flex items-center justify-end absolute bottom-6 right-6 px-6">
                                {/* <span className="text-2xl font-bold text-primary-600">15€</span> */}
                                <a href="services/programme_neriah">
                                    <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                                        Voir détails
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Produit 1 */}
                        <div className="bg-white rounded-2xl relative shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-white h-56 flex items-center justify-center">
                                <img src="images/detoxr.jpg" alt="Produit de detox" className="h-full"/>
                            </div>
                            <div className="p-6 mb-10">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Tisanes detox</h4>
                                <p className="text-gray-600 mb-4">Mélanges de plantes pour favoriser une purification du corps</p>
                                
                            </div>
                            <div className="flex items-center justify-end absolute bottom-6 right-6 px-6">
                                {/* <span className="text-2xl font-bold text-primary-600">15€</span> */}
                                <a href="services/programme_detox">
                                    <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                                        Voir détails
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Produit 2 */}
                        <div className="bg-white rounded-2xl relative shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-white h-56 flex items-center justify-center">
                                <img src="images/prosta.jpg" alt="Produit de prosta" className="h-full"/>
                            </div>
                            <div className="p-6 mb-10">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Tisane de prevension de la prostate</h4>
                                <p className="text-gray-600 mb-4">Extraits purs de plantes pour prevention et traitement de la prostate</p>
                                
                            </div>
                            <div className="flex items-center justify-end absolute bottom-6 right-6 px-6">
                                {/* <span className="text-2xl font-bold text-primary-600">15€</span> */}
                                <a href="services/programme_prostate">
                                    <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                                        Voir détails
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Produit 3 */}
                        <div className="bg-white rounded-2xl relative shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-white h-56 flex items-center justify-center">
                                <img src="images/ferti.jpg" alt="Produit de ferti" className="h-full"/>
                            </div>
                            <div className="p-6 mb-10">
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ferti plus</h4>
                                <p className="text-gray-600 mb-4">Tisane extraites de plantes favirisant</p>
                                
                            </div>
                            <div className="flex items-center justify-end absolute bottom-6 right-6 px-6">
                                {/* <span className="text-2xl font-bold text-primary-600">15€</span> */}
                                <a href="services/programme_ferti">
                                    <button className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors">
                                        Voir détails
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Bienfaits */}
            <section id="bienfaits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi nous Choisir ?</h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Les plantes médicinales offrent une approche naturelle et douce pour prendre soin de sa santé
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">100% Naturel</h4>
                            <p className="text-gray-600">Aucun produit chimique de synthèse, que des ingrédients naturels</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Efficacité Prouvée</h4>
                            <p className="text-gray-600">Des millénaires d'usage traditionnel confirmés par la science moderne</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Douceur d'Action</h4>
                            <p className="text-gray-600">Respect de l'équilibre naturel de votre organisme</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Écologique</h4>
                            <p className="text-gray-600">Respect de l'environnement et développement durable</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre equipe */}
            <section id="bienfaits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">Notre équipe</h3>
                        
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-full h-1/2 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="images/fond2.jpg" alt="" />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Dr </h4>
                            <p className="text-gray-600">Aucun produit chimique de synthèse, que des ingrédients naturels</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Efficacité Prouvée</h4>
                            <p className="text-gray-600">Des millénaires d'usage traditionnel confirmés par la science moderne</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Douceur d'Action</h4>
                            <p className="text-gray-600">Respect de l'équilibre naturel de votre organisme</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">Écologique</h4>
                            <p className="text-gray-600">Respect de l'environnement et développement durable</p>
                        </div>
                    </div>
                </div>
            </section>

            

           <Footer></Footer>
        </>
    );
}