import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-pink-300 backdrop-blur-sm"
  >
    {icon}
    <h3 className="text-xl font-semibold mb-2 text-pink-100">{title}</h3>
    <p className="text-base text-pink-50">{description}</p>
  </motion.div>
);

export default FeatureCard;
