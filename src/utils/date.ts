export const customDate = (date: Date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const customTime = (date: Date) => {
  return new Date(date).toLocaleTimeString("id-ID", {
    timeStyle: "short",
  });
};
