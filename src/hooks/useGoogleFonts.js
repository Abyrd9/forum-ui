import { useState, useEffect } from "react";
import { GOOGLE_FONTS_URL } from "../constants";

// On mount get the top 100 most popular google fonts, then only get the ones
// with more than 4 variants, and finally, get the top 50 from that
const useGoogleFonts = () => {
  const [fonts, setFonts] = useState({ raw: [], formatted: [] });

  useEffect(() => {
    const getGoogleFonts = async () => {
      try {
        const response = await fetch(GOOGLE_FONTS_URL);
        const data = await response.json();
        if (data && data.items.length > 0) {
          const rawList = data.items
            .slice(0, 100)
            .filter(font => {
              const variants = font.variants.filter(
                variant => !variant.includes("italic")
              );
              return variants.length >= 4;
            })
            .slice(0, 50);
          const formattedList = rawList.reduce((acc, { family }) => {
            return [...acc, { value: family, name: family }];
          }, []);
          setFonts({ raw: rawList, formatted: formattedList });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getGoogleFonts();
  }, []);

  return fonts;
};

export default useGoogleFonts;
