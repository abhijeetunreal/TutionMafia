import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "2800% 2800%",
      maskPos: "50% 18%",
      maskSize: "35% 35%",
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: "50% 50%",
      initialMaskSize: "3000% 3000%",
      maskPos: "50% 16%",
      maskSize: "26% 26%",
    };
  }

  return {
    initialMaskPos: "50% 50%",
    initialMaskSize: "3000% 3000%",
    maskPos: "50% 16%",
    maskSize: "22% 22%",
  };
};



