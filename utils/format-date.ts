export const formatDate = (millis: number) => {
  const specificDate = new Date(millis); // Convert milliseconds to a Date object

  if (millis) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })?.format(specificDate);
    return formattedDate;
  }
};
