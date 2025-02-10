'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { motion } from 'framer-motion';

const tools = [
  {
    category: 'Text Tools',
    items: [
      {
        name: 'Case Converter',
        description: 'Convert text between different cases: lower, upper, title, etc.',
        path: '/tools/text/case-converter'
      },
      {
        name: 'Word Counter',
        description: 'Count words, characters, and paragraphs in your text',
        path: '/tools/text/word-counter'
      },
      {
        name: 'Lorem Ipsum Generator',
        description: 'Generate placeholder text for your designs',
        path: '/tools/text/lorem-ipsum'
      }
    ]
  },
  {
    category: 'AI Tools',
    items: [
      {
        name: 'Background Remover',
        description: 'Remove background from images using AI',
        path: '/tools/ai/background-remover'
      },
      {
        name: 'Content Generator',
        description: 'Generate content using AI',
        path: '/tools/ai/content-generator'
      },
      {
        name: 'Speech to Text',
        description: 'Convert speech to text using AI',
        path: '/tools/ai/speech-to-text'
      }
    ]
  },
  {
    category: 'Conversion Tools',
    items: [
      {
        name: 'Unit Converter',
        description: 'Convert between different units of measurement',
        path: '/tools/convert/unit-converter'
      },
      {
        name: 'Currency Converter',
        description: 'Convert between different currencies',
        path: '/tools/convert/currency'
      },
      {
        name: 'Time Zone Converter',
        description: 'Convert between different time zones',
        path: '/tools/convert/time-zone'
      }
    ]
  }
];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.map(category => ({
    ...category,
    items: category.items.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">All Tools</h1>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </motion.div>

      <div className="space-y-12">
        {filteredTools.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((tool, toolIndex) => (
                <Card
                  key={tool.name}
                  title={tool.name}
                  delay={toolIndex * 0.1}
                  onClick={() => window.location.href = tool.path}
                  className="cursor-pointer"
                >
                  <p>{tool.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}