export default function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl">Matheus Dev Blog</h1>
                <h2 className="mt-5 md:mt-0"> Bem vindo ao mundo do <span className="underline decoration-4 decoration-[#F7AB0A]">desenvolvimento</span> </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                Tudo sobre Tecnologia | Dicas sobre SEO e Marketing | Tudo sobre mercado de seguros
            </p>
        </div>
    )
}