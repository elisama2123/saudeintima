
import { Check } from "lucide-react";

const items = [
  {
    title: "O Básico Necessário",
    description:
      "Aprenda tudo sobre seus músculos íntimos e a técnica do Pompoarismo, garantindo confiança e autoconhecimento desde o início.",
  },
  {
    title: "Exercícios Eficazes",
    description:
      "Descubra exercícios específicos que vão melhorar seu desempenho e saúde íntima, baseados em práticas comprovadas.",
  },
  {
    title: "Rotina Saudável",
    description:
      "Incorpore exercícios simples no seu dia a dia para fortalecer sua musculatura e manter sua saúde íntima em alta.",
  },
  {
    title: "Saúde Íntima Completa",
    description:
      "Adote uma rotina que melhora não só sua saúde física, mas também sua satisfação e qualidade de vida íntima.",
  },
];

const LearningOutcomes = () => (
  <section className="my-12 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-100 text-center">
      O Que Você Vai Aprender
    </h2>
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 bg-white/10 border border-pink-200 rounded-xl p-6 mb-2 shadow"
        >
          <div className="flex-shrink-0">
            <Check className="text-green-300 w-7 h-7 mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-pink-100 mb-1">{item.title}</h3>
            <p className="text-pink-50 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LearningOutcomes;
