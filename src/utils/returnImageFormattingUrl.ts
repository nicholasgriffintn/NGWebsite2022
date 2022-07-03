const returnImageFormattingUrl = (url: string) => {
  const baseUrl = {
    development: 'https://images.nicholasgriffin.dev',
    production: 'https://images.nicholasgriffin.dev',
    test: 'https://images.nicholasgriffin.dev',
  }[process.env.NODE_ENV];

  if (url.includes('https://cdn.nicholasgriffin.dev/')) {
    let nonCdnUrl = url.replace('https://cdn.nicholasgriffin.dev/', '');

    return `${baseUrl}/resize/?image=${nonCdnUrl}`;
  }

  return url;
};

export default returnImageFormattingUrl;
