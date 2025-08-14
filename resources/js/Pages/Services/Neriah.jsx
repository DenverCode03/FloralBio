import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

export default function Neriah() {

    return (
        <>
            <Header></Header>
            
            {/* section principale */}

            <div className="w-full bg-orange-50 grid md:grid-cols-2 gap-8 md:gap-20 px-4 py-8 md:py-20 md:px-20">
                <div className="flex flex-col justify-center text-center md:text-left md:px-8">
                    <h2 className="mb-6 text-2xl font-bold text-orange-500 sm:text-4xl">
                        Programme Neriah
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Découvrez notre programme, spécialement conçu pour vous accompagner dans votre parcours de perte de poids de manière saine et durable.
                    </p>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                    <img 
                        src="../images/fitness.jpg" 
                        className="h-full w-full object-cover" 
                        alt="Programme de perte de poids Neriah" 
                    />
                </div>
            </div>

            {/* section d'engagement */}
            <div className="w-full bg-white px-4 py-16 md:px-20 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h3 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
                        Pourquoi choisir le Programme Neriah ?
                    </h3>
                    <div className="mb-12 text-xl leading-relaxed text-gray-600">
                        <p className="mb-6">
                            Vous avez toujours aspiré à retrouver votre silhouette idéale, mais les méthodes traditionnelles vous ont déçu ? 
                            Vous méritez une approche qui respecte votre rythme de vie exigeant et vos standards d'excellence.
                        </p>
                        <p className="mb-6">
                            Le Programme Neriah a été spécialement élaboré pour les personnes ambitieuses qui refusent les compromis sur leur bien-être. 
                            Notre méthodologie scientifiquement prouvée s'adapte à votre emploi du temps, sans sacrifier l'efficacité.
                        </p>
                    </div>
                    
                    <div className="grid gap-8 md:grid-cols-3 mb-12">
                        <div className="rounded-lg bg-orange-50 p-6">
                            <h4 className="mb-4 text-xl font-semibold text-orange-600">Approche Personnalisée</h4>
                            <p className="text-gray-700">Un programme sur-mesure qui s'adapte à vos contraintes professionnelles et personnelles.</p>
                        </div>
                        <div className="rounded-lg bg-orange-50 p-6">
                            <h4 className="mb-4 text-xl font-semibold text-orange-600">Résultats Durables</h4>
                            <p className="text-gray-700">Une transformation progressive et pérenne, sans effet yo-yo ni frustration.</p>
                        </div>
                        <div className="rounded-lg bg-orange-50 p-6">
                            <h4 className="mb-4 text-xl font-semibold text-orange-600">Accompagnement Expert</h4>
                            <p className="text-gray-700">Un suivi professionnel rigoureux pour maximiser vos chances de réussite.</p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">
                        <h4 className="mb-4 text-2xl font-bold">
                            Investissez dans votre réussite
                        </h4>
                        <p className="mb-6 text-lg opacity-90">
                            Rejoignez les professionnels qui ont fait le choix de l'excellence pour leur transformation physique. 
                            Votre succès mérite une approche à la hauteur de vos ambitions.
                        </p>
                        <button className="rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 transition-all hover:bg-gray-100 hover:shadow-lg">
                            Découvrir le Programme
                        </button>
                    </div>
                </div>
            </div>

{/* section qu'est-ce que le programme neriah */}
<div className="w-full bg-gray-50 px-4 py-16 md:px-20 md:py-24">
    <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h3 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
                Qu'est-ce que le Programme Neriah ?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Un programme complet de conseil et suivi alimentaire quotidien, conçu pour vous accompagner 
                dans une perte de poids saine et durable, sans effets secondaires.
            </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div>
                <h4 className="text-2xl font-bold text-orange-600 mb-6">
                    Une approche alimentaire révolutionnaire
                </h4>
                <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                        Le Programme Neriah vous permet de perdre du poids dans le respect total des normes de santé, 
                        tout en conservant un rythme alimentaire <strong>normal, varié et équilibré</strong>.
                    </p>
                    <p className="leading-relaxed">
                        Fini les régimes drastiques et les privations ! Notre méthode vous guide vers une transformation 
                        progressive qui s'intègre naturellement dans votre quotidien.
                    </p>
                </div>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
                <h5 className="text-xl font-semibold text-gray-800 mb-6">Les piliers du programme :</h5>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">Conseil alimentaire personnalisé quotidien</span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">Suivi professionnel régulier et adaptatif</span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">Respect des normes de santé établies</span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">Alimentation variée et équilibrée maintenue</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥗</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Alimentation Normale</h5>
                <p className="text-gray-600 text-sm">
                    Conservez vos habitudes alimentaires tout en optimisant vos choix nutritionnels
                </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚖️</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Perte de Poids Saine</h5>
                <p className="text-gray-600 text-sm">
                    Une approche progressive respectant votre métabolisme et votre bien-être
                </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                </div>
                <h5 className="text-lg font-semibold text-gray-800 mb-3">Zéro Effet Secondaire</h5>
                <p className="text-gray-600 text-sm">
                    Une méthode naturelle qui préserve votre santé et votre énergie au quotidien
                </p>
            </div>
        </div>

        <div className="bg-orange-500 rounded-lg p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">
                Votre transformation commence aujourd'hui
            </h4>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Découvrez comment le Programme Neriah peut transformer votre relation à l'alimentation 
                et vous accompagner vers vos objectifs de perte de poids, naturellement et durablement.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                En savoir plus sur le programme
            </button>
        </div>
    </div>
</div>

<Footer></Footer>
            
            
        </>
    )
}