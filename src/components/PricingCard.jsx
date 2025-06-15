
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white bg-opacity-10 p-6 rounded-lg ${highlighted ? "border-2 border-pink-400" : ""}`}
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">{price}<span className="text-xl"> à vista</span></p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-400" />
          {feature}
        </li>
      ))}
    </ul>
    <Link to="/plan-selection">
      <Button className="w-full">Quero essa Transformação</Button>
    </Link>
  </motion.div>
);

export default PricingCard;
