import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  onPress: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, onPress }) => (
  <TouchableOpacity onPress={onPress} className="mb-4 rounded-lg bg-white p-4 shadow">
    <Text className="text-lg font-bold">{title}</Text>
    <Text className="text-sm text-gray-600">{date}</Text>
    <Text className="text-sm text-gray-800">{location}</Text>
  </TouchableOpacity>
);

export default EventCard;
