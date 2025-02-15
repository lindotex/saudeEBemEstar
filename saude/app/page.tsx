import Image from "next/image";

const HomePage = () => {
    return (
      <div className="flex min-h-screen text-white">
        {/* Lateral Esquerda - Banners */}
        <aside className="w-1/6 shadow-md p-4 space-y-4">
                
            <p>Patrocinios</p>
            <div className="p-4 rounded-md text-center border border-white bg-yellow-600">
                <h2 className="font-bold text-lg">++ PATROCINADO ++</h2>
                <p>Nos ajude a manter este canal no Ar!</p>
            </div>
            <div className="p-4 rounded-md text-center border border-white">
                <h2 className="font-bold text-lg">Farmácia Saúde+</h2>
                <p>Descontos exclusivos para moradores do bairro!</p>
            </div>
            <div className="p-4 rounded-md text-center border border-white">
                <h2 className="font-bold text-lg">Posto de Saúde Central</h2>
                <p>Atendimento 24h para emergências.</p>
            </div>
            <p className="font-mono">Em conformidade com os Objetivos de desenvolvimento sustentavel</p>
            <div className="flex flex-row gap-4 justify-center">
                <Image
                    src={'/SDG-3.svg'}
                    width={80}
                    height={80}
                    alt="SDG-3"
                    className="rounded-md text-center border border-green-400"
                />
                <Image
                    src={'/SDG-10.svg'}
                    width={80}
                    height={80}
                    alt="SDG-10"
                    className="rounded-md text-center border border-pink-500"
                />
            </div>
        </aside>
  
        {/* Conteúdo Principal */}
        <main className="flex-1 p-8 mr-48">
          <h1 className="text-3xl font-bold mb-4">
            Bem-vindo ao Portal de Saúde do Bairro
          </h1>
          <p className="">
            Nosso site ajuda você a encontrar farmácias, postos de saúde e locais
            de vacinação mais próximos de sua residência. Utilize o nosso mapa
            interativo para visualizar os pontos de atendimento e obter
            informações detalhadas.
          </p>
  
          <div className="mt-6">
            <Image
              src="/maps.png"
              alt="Mapa Interativo"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <p className="text-sm mt-2">
              Exemplo de mapa interativo. Em breve, você poderá visualizar os
              locais próximos!
            </p>
          </div>
        </main>
      </div>
    );
  };
  
  export default HomePage;
  