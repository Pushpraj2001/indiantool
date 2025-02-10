import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

const Card = ({ 
  title, 
  icon, 
  children, 
  className = '', 
  onClick,
  delay = 0 
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {(icon || title) && (
        <div className="flex items-center mb-4">
          {icon && (
            <div className="tool-icon mr-3">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-2xl font-bold dark:text-white">{title}</h3>
          )}
        </div>
      )}
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;