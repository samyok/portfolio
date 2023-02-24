const people = async (req, res) => {
  let data = await fetch("https://api.github.com/orgs/minihacks/members", {
    headers: {
      Authorization: `token ${process.env.GITHUB_MINIHACK_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  }).then((response) => response.json());

  data = data.sort((a, b) => (a.id < b.id ? -1 : 1));

  // res.json(data);
  // return;
  const SIZE = 100;
  const ROW_LENGTH = 9;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${
    SIZE * ROW_LENGTH
  } ${SIZE * Math.ceil(data.length / ROW_LENGTH)}">`;
  data.forEach(({ avatar_url: url, login: username }, index) => {
    const x = (index % ROW_LENGTH) * SIZE;
    const y = Math.floor(index / ROW_LENGTH) * SIZE;
    svg += `<image href="${url}" x="${x}" y="${y}" width="${SIZE * 0.95}" height="${SIZE * 0.95}" />`;
    // add a gray rectangle to the background
    svg += `<rect x="${x}" y="${y + SIZE * 0.8}" width="${SIZE * 0.95}" height="${
      SIZE * 0.15
    }" fill="black" opacity="0.4" />`;
    svg += `<text x="${x + SIZE * 0.05}" y="${y + SIZE * 0.9}" font-family="sans-serif" font-size="${
      SIZE * 0.075
    }" fill="white">@${username}</text>`;
  });

  svg += `</svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
};

export default people;
