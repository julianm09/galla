import cleanString from "@/lib/helpers/cleanString";

export const searchImage = async (imageQuery: string) => {
  const query = cleanString(imageQuery);

  console.log(query)

  const randNum = Math.floor(Math.random() * 5) + 1;
  const randNum2 = Math.floor(Math.random() * 5) + 1;

  const search = `https://api.unsplash.com/search/photos?page=${randNum}&query=${query}&orientation=landscape&client_id=VcpKFVjbEWrxtXl1M3cgzYoh_DBLTwAmcLLGf3P8yy8`;

  const response = await fetch(search);
  const data = await response.json();
  return data.results[randNum2].urls;
};
