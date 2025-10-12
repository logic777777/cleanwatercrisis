import React from 'react';
import { ArrowRight, Shield, Droplets, AlertTriangle, CheckCircle, TrendingUp, Users, Clock, Star } from 'lucide-react';
import { useRouter } from '../router';

export function HomePage() {
  const { navigate } = useRouter();

  const features = [
    {
      icon: AlertTriangle,
      title: "Crisis Awareness",
      description: "Stay informed about global water scarcity with data-driven insights",
      color: "text-coral-accent"
    },
    {
      icon: Shield,
      title: "Emergency Ready",
      description: "Practical strategies to secure clean water during any disaster",
      color: "text-ocean-blue"
    },
    {
      icon: Droplets,
      title: "Smart Solutions",
      description: "Cutting-edge atmospheric water generation technology reviewed",
      color: "text-success-green"
    }
  ];

  