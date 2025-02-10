'use client';

import { FaPenFancy, FaRobot, FaExchangeAlt } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Home() {
  const tools = [
    {
      title: 'Text & Writing Tools',
      icon: <FaPenFancy />,
      items: [
        { name: 'Case Converter', href: '/tools/text/case-converter' },
        { name: 'Word Counter', href: '/tools/text/word-counter' },
        { name: 'Lorem Ipsum Generator', href: '/tools/text/lorem-ipsum' },
      ],
    },
    {
      title: 'AI-Powered Tools',
      icon: <FaRobot />,
      items: [
        { name: 'Background Remover', href: '/tools/ai/background-remover' },
        { name: 'Content Generator', href: '/tools/ai/content-generator' },
        { name: 'Speech to Text', href: '/tools/ai/speech-to-text' },
      ],
    },
    {
      title: 'Conversion Tools',
      icon: <FaExchangeAlt />,
      items: [
        { name: 'Unit Converter', href: '/tools/convert/unit-converter' },
        { name: 'Currency Converter', href: '/tools/convert/currency' },
        { name: 'Time Zone Converter', href: '/tools/convert/time-zone' },
      ],
    },
  ];

  return (
    <div className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 dark:text-white">Welcome to Indian Tools</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Your one-stop destination for powerful online tools</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Card
            key={tool.title}
            title={tool.title}
            icon={tool.icon}
            delay={index * 0.2}
          >
            <ul className="space-y-2">
              {tool.items.map((item) => (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className="w-full text-left justify-start"
                    onClick={() => window.location.href = item.href}
                  >
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
