ScrollOut({
  threshold: 0.2,
  once: true,
  onShown: function (el) {
    const div = el.children;
    if (div[0].localName === "div") {
      div[0]?.children[0]?.classList.add("animate-openLoad");
      div[0]?.children[1]?.classList.add("animate-openLoadReverse");
    }
  },
});
