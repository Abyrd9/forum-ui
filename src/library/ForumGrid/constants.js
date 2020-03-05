export default {
  grid: {
    xs: {
      min: 0,
      max: 480,
      fluid: true,
      content: 320,
      columns: 12,
      gutter: 24,
      prefix: 'xs',
    },
    sm: {
      min: 480,
      max: 768,
      fluid: false,
      content: 480,
      columns: 12,
      gutter: 24,
      prefix: 'sm',
    },
    md: {
      min: 768,
      max: 990,
      fluid: false,
      content: 768,
      columns: 12,
      gutter: 32,
      prefix: 'md',
    },
    lg: {
      min: 990,
      max: 1200,
      fluid: false,
      content: 990,
      columns: 12,
      gutter: 40,
      prefix: 'lg',
    },
    xl: {
      min: 1200,
      max: Infinity,
      fluid: false,
      content: 1200,
      columns: 12,
      gutter: 40,
      prefix: 'xl',
    },
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
        const query = `@media only screen and (min-width: ${min}px) and (max-width: ${max - 1}px)`;
        const queryUp = `@media only screen and (min-width: ${min}px)`;
        const queryDown = `@media only screen and (max-width: ${max}px)`;
        if (max === Infinity) {
          media[value.key] = { only: queryUp, ...value };
        } else {
          media[value.key] = { only: query, up: queryUp, down: queryDown, ...value };
        }
      });
    }
    return media;
  },
};
