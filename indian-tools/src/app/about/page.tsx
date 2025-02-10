'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import Card from '@/components/ui/Card';
export default function AboutPage() {
  const values = [
    {
      icon: <FaHeart className="text-red-500" />,
      title: 'User-Centric',
      description: 'We put our users first in everything we do, ensuring our tools are intuitive and helpful.'
    },
    {
      icon: <FaShieldAlt className="text-blue-500" />,
      title: 'Reliability',
      description: 'Our tools are built with robust technology to ensure consistent and dependable performance.'
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: 'Innovation',
      description: 'We constantly evolve and improve our tools to meet the changing needs of our users.'
    }
  ];

  const team = [
    {
      name: 'Pushp Raj',
      role: 'Founder & CEO',
      image: '/team/aarav.jpg'
    },
    {
      name: 'Pushp Raj',
      role: 'Founder & CEO',
      image: '/team/aarav.jpg'
    },
    // Add more team members here if needed
  ];
}

