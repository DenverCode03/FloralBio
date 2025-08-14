import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function Detox() {

    return (
        <>
            <Header></Header>
            
            {/* section principale */}

            <div className="w-full bg-orange-50 grid md:grid-cols-2 gap-8 md:gap-20 px-4 py-8 md:py-20 md:px-20">
                <div className="flex flex-col justify-center text-center md:text-left md:px-8">
                    <h2 className="mb-6 text-xl font-bold text-orange-500 sm:text-2xl">
                        Tisane de cure de detox
                    </h2>
                    <p className="md:text-lg text-sm leading-relaxed text-gray-700">
                        Découvrez notre programme, spécialement conçu pour vous accompagner dans votre parcours de perte de poids de manière saine et durable.
                    </p>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                    <img 
                        src="../images/detox.webp" 
                        className="h-full w-full object-cover" 
                        alt="Programme de perte de poids Neriah" 
                    />
                </div>
            </div>

            {/* section de but d une desintox */}
            <div className="w-full bg-white px-4 py-16 md:px-20 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h3 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">
                        Pourquoi faire une detox constament ?
                    </h3>
                    <div className="mb-12 md:text-xl text-sm leading-relaxed text-gray-600">
                        <p className="mb-6 leading-8">
                            Notre corps est constamment exposé à des toxines provenant de notre alimentation, de l'environnement et du stress quotidien. Une détox régulière permet d'éliminer ces substances nocives accumulées dans nos organes, particulièrement le foie, les reins et le système digestif. En pratiquant une détoxification constante, vous aidez votre organisme à maintenir un équilibre optimal, améliorez votre digestion, renforcez votre système immunitaire et retrouvez une énergie naturelle. Cette approche préventive favorise également une meilleure qualité de sommeil, une peau plus éclatante et contribue à maintenir un poids santé de manière durable.
                            
                        </p>
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
                            Une tisane détoxifiante à base d'herbes médicinales, spécialement formulée pour purifier votre organisme et éliminer les toxines
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
                        <div className="order-1 md:order-1">
                            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-lg">
                                <img 
                                    src="../images/detox.webp" 
                                    className="h-full w-full object-cover" 
                                    alt="Tisane détox médicinale Neriah" 
                                />
                            </div>
                        </div>
                        
                        <div className="order-2 md:order-2">
                            <h4 className="text-2xl font-bold text-orange-600 mb-6">
                                Tisane Détoxifiante à Base d'Herbes Médicinales
                            </h4>
                            <div className="space-y-4 text-gray-700 mb-8">
                                <p className="leading-relaxed">
                                    Notre tisane détox est composée d'un mélange soigneusement sélectionné d'herbes médicinales reconnues pour leurs propriétés purifiantes et détoxifiantes. Cette formulation naturelle aide à éliminer les toxines, stimuler le métabolisme et soutenir le bon fonctionnement des organes d'élimination.
                                </p>
                                <p className="leading-relaxed">
                                    Développée selon les principes de la phytothérapie traditionnelle et validée par des études modernes, cette tisane offre une approche douce et efficace pour purifier votre organisme et retrouver votre vitalité naturelle au quotidien.
                                </p>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h5 className="font-semibold text-orange-800 mb-2">Bénéfices de notre tisane détox :</h5>
                                    <ul className="space-y-2 text-sm text-orange-700">
                                        <li>• Élimine les toxines accumulées</li>
                                        <li>• Stimule le métabolisme naturel</li>
                                        <li>• Améliore la digestion et le transit</li>
                                        <li>• 100% naturelle, sans effets secondaires</li>
                                        <li>• Facile à préparer et à consommer</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
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