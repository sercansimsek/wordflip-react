export const fetchRandomWords = async () => {
  const url =
    "https://random-words-api.kushcreates.com/api?language=en&words=10";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
};
