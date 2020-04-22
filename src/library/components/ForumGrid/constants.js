export default {
  grid: {
    xsMobile: {
      min: 0,
      max: 460,
      fluid: true,
      content: 312,
      columns: 12,
      divider: 24,
      gutter: 24,
      prefix: "xs"
    },
    mobile: {
      min: 460,
      max: 768,
      fluid: false,
      content: 412,
      columns: 12,
      divider: 24,
      gutter: 24,
      prefix: "sm"
    },
    tablet: {
      min: 768,
      max: 1280,
      fluid: false,
      content: 704,
      columns: 12,
      divider: 32,
      gutter: 32,
      prefix: "md"
    },
    desktop: {
      min: 1280,
      max: Infinity,
      fluid: false,
      content: 1200,
      columns: 12,
      divider: 40,
      gutter: 40,
      prefix: "lg"
    }
  },
  get media() {
    const media = {};
    if (this) {
      const breakpoints = Object.entries(this.grid)
        .map(([key, value]) => {
          return { key, ...value };
        })
        .sort((a, b) => a.min - b.min);
      breakpoints.forEach(value => {
        const { min, max } = value;
        const query = `@media only screen and (min-width: ${min}px) and (max-width: ${max -
          1}px)`;
        const queryUp = `@media only screen and (min-width: ${min}px)`;
        const queryDown = `@media only screen and (max-width: ${max - 1}px)`;
        if (max === Infinity) {
          media[value.key] = { only: queryUp, ...value };
        } else {
          media[value.key] = {
            only: query,
            up: queryUp,
            down: queryDown,
            ...value
          };
        }
      });
    }
    return media;
  }
};
