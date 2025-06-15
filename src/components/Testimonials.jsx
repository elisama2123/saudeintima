
import { Quote } from "lucide-react";

const testimonials = [
  {
    author: "Camila Rodrigues",
    quote: "Com você foi tudo tão simples, não mudou só na parte física, mas principalmente na autoestima que eu consegui recuperar, me sentir mais mulher, mais segura. Obrigadaaa! 🥰",
  },
  {
    author: "Juliana Santos",
    quote: "Só tenho a agradecer. Me arrependo de não ter começado antes! São pontos positivos! Super importante conhecer nossa região íntima e desenvolver uma boa musculatura.",
  },
  {
    author: "Fernanda Costa",
    quote: "Realmente muda a qualidade de vida! O melhor é que conseguimos aprender os exercícios e levar para nossa rotina, sem interferir nas nossas atividades.",
  },
  {
    author: "Ana Paula Silva",
    quote: "Prescreve exercícios para serem executados em casa e está sempre disponível para esclarecer dúvidas. É nítida a percepção dos meus ganhos e a melhoria da minha qualidade de vida. Super indico!",
  },
  {
    author: "Mariana Oliveira",
    quote: "Sempre que lembro, faço para manter a musculatura pélvica. Tive um ótimo resultado, recomendo para quem não conhece. A Priscila é qualificada, atenciosa. Beijos, Priscila.",
  },
];

const Testimonials = () => (
  <section className="my-12 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-pink-100 text-center">O Que Nossas Alunas Dizem</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white/10 border border-pink-200 rounded-xl p-6 flex flex-col gap-3 shadow-lg">
          <Quote className="text-pink-400 w-7 h-7" />
          <p className="italic text-pink-50">&quot;{t.quote}&quot;</p>
          <span className="font-semibold text-white mt-2">{t.author}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
