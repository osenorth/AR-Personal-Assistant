export const locationGPT = async (location) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: `Tell me something about ${location} in less than 100 words`,
    }),
  });
  const data = await response.json();
  let GPTanswer = data.text.content;
  return GPTanswer;
};

export const journeyGPT = async (start, end) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: `Please give me exploration suggestions about journey between ${start} and ${end} in less than 100 words. Focus more on different modes of transportation and whether today.`,
    }),
  });
  const data = await response.json();
  let GPTanswer = data.text.content;
  return GPTanswer;
};
