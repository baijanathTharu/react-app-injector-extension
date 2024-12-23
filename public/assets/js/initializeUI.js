(async () => {
  const app = document.createElement("div");
  app.id = "injector-root";
  app.style.position = "fixed";
  app.style.right = "10px";
  app.style.top = "20px";
  app.style.zIndex = "99999";
  document.body.append(app);

  const src = chrome?.runtime?.getURL("/react/index.js");
  await import(src);
})();
