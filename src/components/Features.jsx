
import { Heart, Sparkle, Flower2 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-12">
    <FeatureCard
      icon={<Heart className="h-12 w-12 mb-4 text-pink-400" />}
      title="Autoestima nas Alturas"
      description="Sinta-se mais confiante, amada e segura em todos os momentos. Eleve sua autoestima e descubra uma nova mulher dentro de você!"
    />
    <FeatureCard
      icon={<Sparkle className="h-12 w-12 mb-4 text-yellow-300" />}
      title="Prazer & Saúde Íntima"
      description="Aprenda práticas seguras e naturais para cuidar da sua saúde íntima com carinho, prevenindo desconfortos e aumentando o prazer com consciência."
    />
    <FeatureCard
      icon={<Flower2 className="h-12 w-12 mb-4 text-fuchsia-300" />}
      title="Autoconhecimento & Liberdade"
      description="Desperte sensações adormecidas, quebre tabus e descubra um novo universo de liberdade e conexão com seu corpo."
    />
  </section>
);

export default Features;
