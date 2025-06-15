
import PricingCard from "./PricingCard";

const PricingSection = () => (
  <section className="mt-24">
    <h2 className="text-4xl font-bold mb-12">Escolha a Melhor Forma de Viver Sua Transformação</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PricingCard
        title="Acesso Essencial"
        price="R$97"
        features={[
          "Acesso vitalício ao curso completo",
          "Conteúdo 100% online, aulas em vídeo",
          "Técnicas exclusivas de Pompoarismo",
          "Grupo exclusivo de alunas no WhatsApp",
          "Atualizações futuras sem custo",
        ]}
      />
      <PricingCard
        title="Experiência Premium"
        price="R$197"
        features={[
          "Tudo do Essencial",
          "2 encontros ao vivo para tirar dúvidas",
          "Material bônus: e-books e playlists de exercícios",
          "Acesso prioritário à instrutora",
          "Acompanhamento personalizado por 30 dias",
        ]}
        highlighted={true}
      />
      <PricingCard
        title="VIP Transformação Total"
        price="R$497"
        features={[
          "Tudo do Premium",
          "Sessão individual online com a instrutora",
          "Mentoria exclusiva por 60 dias",
          "Certificado especial Maestria do Pompoar",
          "Presente surpresa enviado para sua casa",
        ]}
      />
    </div>
  </section>
);

export default PricingSection;
