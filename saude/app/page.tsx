import Footer from './components/footer';
import Header from './components/header';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1"> {/* Isso garante que o conteúdo ocupe o espaço disponível */}
                {/* Conteúdo da página aqui */}
            </main>
            <Footer className="m-auto flex justify-center w-full py-4 bg-gray-800 text-white" />
        </div>
    );
}
