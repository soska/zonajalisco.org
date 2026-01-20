module.exports = function(eleventyConfig) {
  // Watch the built CSS for live reload
  eleventyConfig.addWatchTarget("./_site/css/");

  // Ignore source CSS (Tailwind handles it)
  eleventyConfig.watchIgnores.add("src/css/");

  // Slugify filter for Spanish text (removes diacritics, converts to kebab-case)
  eleventyConfig.addFilter("slugify", (str) => {
    if (!str) return "";
    return String(str)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  // Get unique values from events for a given field
  eleventyConfig.addFilter("uniqueByField", (events, field) => {
    return [...new Set(events.map(e => e[field]))];
  });

  // Filter events by field value
  eleventyConfig.addFilter("filterByField", (events, field, value) => {
    return events.filter(e => e[field] === value);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
