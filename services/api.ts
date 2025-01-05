export const fetchEvents = async (location: string) => {
  const response = await fetch(`https://api.example.com/events?location=${location}`);
  return response.json();
};
