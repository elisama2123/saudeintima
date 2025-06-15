
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Técnicas de cuidado íntimo e autoestima",
  "Orientações práticas e naturais",
  "Conteúdo exclusivo 100% online",
  "Escrita simples, direta e sem tabus",
];

const EbookOffer = () => (
  <section className="w-full max-w-xl mx-auto my-12 bg-white bg-opacity-10 rounded-2xl px-6 py-10 shadow-2xl border-2 border-pink-400">
    <h3 className="text-3xl font-bold mb-2 text-pink-100">
      Ebook Saúde Íntima – Só R$9,97 à vista
    </h3>
    <p className="mb-6 text-lg text-fuchsia-100">
      Acesso imediato ao conteúdo completo. Leitura leve, prática e transformadora.
    </p>
    <ul className="mb-8 space-y-2 text-left max-w-lg mx-auto">
      {benefits.map((benefit, idx) => (
        <li key={idx} className="flex items-center text-pink-50">
          <Check className="h-5 w-5 mr-3 text-green-300" />
          {benefit}
        </li>
      ))}
    </ul>
    <Button
      size="lg"
      className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 text-lg font-bold w-full shadow-lg"
    >
      Sim, Quero o Meu Ebook!
    </Button>
  </section>
);

export default EbookOffer;
