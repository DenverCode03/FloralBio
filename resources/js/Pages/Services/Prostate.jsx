import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function Prostate() {

    return (
        <>
            <Header></Header>
            
            {/* section principale */}

            <div className="w-full bg-green-50 grid md:grid-cols-2 gap-8 md:gap-20 px-4 py-8 md:py-20 md:px-20">
                <div className="flex flex-col justify-center text-center md:text-left md:px-8">
                    <h2 className="mb-6 text-xl font-bold text-green-500 sm:text-2xl">
                        Tisane de prenvention et traitement de la prostate
                    </h2>
                    <p className="md:text-lg text-sm leading-relaxed text-gray-700">
                        Découvrez notre programme, spécialement conçu pour vous accompagner dans votre parcours de perte de poids de manière saine et durable.
                    </p>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                    <img 
                        src="../images/prostate.jpg" 
                        className="h-full w-full object-cover" 
                        alt="Programme de perte de poids Neriah" 
                    />
                </div>
            </div>

            {/* section de presentation du cancer de la prostate */}
            <div className="w-full bg-white px-4 py-16 md:px-20 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h3 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">
                        C est quoi le cancer de la prostate ?
                    </h3>
                    <div className="mb-12 md:text-xl text-sm leading-relaxed text-gray-600">
                        <p className="mb-6">
                            Le cancer de la prostate est une maladie qui touche la prostate, une petite glande de la taille d'une noix située sous la vessie chez l'homme. Cette glande produit un liquide qui fait partie du sperme.

                            Quand on parle de cancer de la prostate, cela signifie que des cellules anormales se développent dans cette glande et peuvent se multiplier de façon incontrôlée. C'est le cancer le plus fréquent chez les hommes, surtout après 50 ans.

                            La bonne nouvelle ? Détecté tôt, ce cancer se soigne très bien. C'est pourquoi il est important de faire des contrôles réguliers et de connaître les signes qui peuvent alerter : difficultés à uriner, envies fréquentes d'aller aux toilettes, ou douleurs dans le bas du dos.
                        </p>
                    </div>
                    
                    
                </div>
            </div>

            {/* section de presentation des phase du cancer de la prostate */}
            <div className="w-full bg-green-50 px-4 py-16 md:px-20 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h3 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">
                            Les différentes phases du cancer de la prostate
                        </h3>
                        <p className="md:text-xl text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Comprendre l'évolution du cancer de la prostate pour mieux le prévenir et le traiter
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Phase 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Phase précoce du cancer de la prostate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 1</span>
                                </div>
                                <h4 className="text-lg font-bold text-green-700 mb-3">Phase Précoce</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cancer localisé uniquement dans la prostate. Aucun symptôme visible. 
                                    Détectable uniquement par dépistage (PSA, toucher rectal).
                                </p>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Phase locale du cancer de la prostate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 2</span>
                                </div>
                                <h4 className="text-lg font-bold text-green-700 mb-3">Extension Locale</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Le cancer commence à s'étendre au-delà de la prostate vers les tissus voisins. 
                                    Premiers symptômes urinaires possibles.
                                </p>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Phase régionale du cancer de la prostate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 3</span>
                                </div>
                                <h4 className="text-lg font-bold text-green-700 mb-3">Extension Régionale</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Propagation aux ganglions lymphatiques régionaux. 
                                    Symptômes plus marqués : troubles urinaires, douleurs pelviennes.
                                </p>
                            </div>
                        </div>

                        {/* Phase 4 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Phase métastatique du cancer de la prostate"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold">Phase 4</span>
                                </div>
                                <h4 className="text-lg font-bold text-green-700 mb-3">Phase Métastatique</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Propagation à distance (os, foie, poumons). 
                                    Symptômes systémiques : fatigue, douleurs osseuses, perte de poids.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-green-500 rounded-lg p-8 text-white text-center">
                        <h4 className="text-2xl font-bold mb-4">
                            L'importance du dépistage précoce
                        </h4>
                        <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
                            Plus le cancer de la prostate est détecté tôt, plus les chances de guérison sont élevées. 
                            Un dépistage régulier après 50 ans (ou 45 ans en cas d'antécédents familiaux) est essentiel.
                        </p>
                        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
                            <div className="bg-white/10 rounded-lg p-4">
                                <h5 className="font-semibold mb-2">Phase 1-2</h5>
                                <p className="text-sm opacity-90">Taux de survie à 5 ans : 95-100%</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                                <h5 className="font-semibold mb-2">Phase 3</h5>
                                <p className="text-sm opacity-90">Taux de survie à 5 ans : 85-90%</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                                <h5 className="font-semibold mb-2">Phase 4</h5>
                                <p className="text-sm opacity-90">Taux de survie à 5 ans : 30-40%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section de presentation de la solution */}

            <div className="w-full bg-white px-4 py-16 md:px-20 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h3 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
                            Notre Solution Naturelle
                        </h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Une tisane thérapeutique à base d'herbes médicinales, spécialement formulée pour la prévention et le traitement des problèmes de prostate
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
                        <div className="order-1 md:order-1">
                            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
                                <img 
                                    src="/images/prosta.jpg" 
                                    className="h-full w-full object-cover" 
                                    alt="Tisane médicinale pour la prostate Neriah" 
                                />
                            </div>
                        </div>
                        
                        <div className="order-2 md:order-2">
                            <h4 className="text-2xl font-bold text-green-600 mb-6">
                                Tisane Thérapeutique à Base d'Herbes Médicinales
                            </h4>
                            <div className="space-y-4 text-gray-700 mb-8">
                                <p className="leading-relaxed">
                                    Notre tisane est composée d'un mélange soigneusement sélectionné d'herbes médicinales reconnues pour leurs propriétés bénéfiques sur la santé de la prostate. Cette formulation naturelle aide à réduire l'inflammation, améliorer le flux urinaire et soutenir le bon fonctionnement de la prostate.
                                </p>
                                <p className="leading-relaxed">
                                    Développée selon les principes de la phytothérapie traditionnelle et validée par des études modernes, cette tisane offre une approche douce et efficace pour prendre soin de votre santé prostatique au quotidien.
                                </p>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h5 className="font-semibold text-green-800 mb-2">Bénéfices de notre tisane :</h5>
                                    <ul className="space-y-2 text-sm text-green-700">
                                        <li>• Réduit l'inflammation de la prostate</li>
                                        <li>• Améliore le confort urinaire</li>
                                        <li>• Soutient la fonction prostatique normale</li>
                                        <li>• 100% naturelle, sans effets secondaires</li>
                                        <li>• Facile à préparer et à consommer</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                                Passer la commande
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

            
        </>
    )
}