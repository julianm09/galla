import cleanHeadline from "@/lib/helpers/cleanHeadline";
import { generateText } from "../openAi/generateText";
import { searchImage } from "../unslpash/searchImage";

type props = {
  name: string;
  description: string;
  image: string;
  temperature: number;
  layout: string;
};

const generateAbout = async ({
  name,
  description,
  image,
  temperature,
  layout,
}: props) => {
  const image1 = await searchImage(image).catch((err) => {
    console.log(err);
    return;
  });

  const promptClean = "under 150 charcaters";

  const prompt1 = `Please write me an about section website headline for my ${description} business named "${name}" ${promptClean}`;
  const headline = await generateText(prompt1, temperature).catch((err) => {
    console.log(err);
    return;
  });

  const prompt2 = `Please write me an about us section description for my ${description} business named "${name}" ${promptClean}`;
  const text = await generateText(prompt2, temperature).catch((err) => {
    console.log(err);
    return;
  });

  const section = {
    className: "about-" + layout,
    headline: cleanHeadline(headline),
    text: text,
    type: "about",
    image: image1.regular,
    layout: layout,
    name: name,
    description: description,
    imagePrompt: image,
    cta: true,
    ctaText: "Learn More"
  };

  return section;
};

export default generateAbout;
