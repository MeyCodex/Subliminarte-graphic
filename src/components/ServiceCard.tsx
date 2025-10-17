import { motion } from "framer-motion";
import { type Service } from "@/data/ServicesData";
import { FiRefreshCw } from "react-icons/fi";

type Props = {
  service: Service;
  isFlipped: boolean;
  onFlip: () => void;
};

function ServiceCard({ service, isFlipped, onFlip }: Props) {
  return (
    <div
      className="relative h-64 [perspective:1000px]"
      onClick={onFlip}
      onMouseEnter={onFlip}
      onMouseLeave={onFlip}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-400 cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="flip-card-face absolute w-full h-full bg-card border border-border rounded-2xl p-8 text-center flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4 text-muted opacity-50 block lg:hidden">
            <FiRefreshCw className="w-5 h-5" />
          </div>
          <service.icon className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
        <div className="flip-card-face absolute w-full h-full [transform:rotateY(180deg)] bg-card border border-accent rounded-2xl p-6 text-center flex flex-col items-center justify-center">
          <p className="text-muted text-lg">{service.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
