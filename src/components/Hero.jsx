
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lua } from "lucide-react";

const Hero = () => (
  <section className="mb-12 mt-8">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-5xl font-bold mb-6 text-white"
    >
      Desperte Todo o Seu Poder Feminino!
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-xl mb-8 max-w-xl mx-auto text-pink-100"
    >
      Descubra os segredos da Saúde Íntima com um ebook completo que vai transformar sua autoestima, bem-estar e prazer. Para mulheres que querem viver sua melhor versão – com leveza e liberdade!
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex justify-center"
    >
      <Button
        size="lg"
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg"
      >
        Quero Despertar Agora!
      </Button>
    </motion.div>
  </section>
);

export default Hero;
