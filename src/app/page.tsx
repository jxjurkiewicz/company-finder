import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Search } from "@/components/Search/Search";

export default function Home() {
  // let arrayTest: string[];
  // arrayTest = ["adam", "yoshi"];

  return (
    <>
      <Header />

      <main className="mx-auto w-full min-h-96">
        <Search />
        <div className="py-10 text-center text-lg">Future Data</div>
      </main>

      <Footer />
    </>
  );
}
