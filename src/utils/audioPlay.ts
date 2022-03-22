export const audioPlay = (url: string | undefined) => {
  const audio = new Audio(
    `https://raw.githubusercontent.com/Vladislav-Ivanchikov/rslang-data/master/${url}`
  );
  audio.load();
  audio.play();
};
