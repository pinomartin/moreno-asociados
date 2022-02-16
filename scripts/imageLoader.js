function imageLoader({assets,  src }) {
    let route = ``;
    assets ? route = `public/assets/clients/${src}` : route = `public/${src}`;

  return route; // REPLACE WITH YOUR IMAGE DIRECTORY
}

module.exports = imageLoader;
