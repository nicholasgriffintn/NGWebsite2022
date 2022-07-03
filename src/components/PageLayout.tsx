import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Element } from 'react-scroll';

import Header from './Header';
import Footer from './Footer';
import returnImageFormattingUrl from '../utils/returnImageFormattingUrl';

type Props = {
  children: React.ReactNode;
  displayHeader?: boolean;
  displayFooter?: boolean;
  showHero?: boolean;
  darkMain?: boolean;
  loadingState?: boolean;
  hideContent?: boolean;
  title: string;
  description?: string;
  thumbnail?: string;
  header?: string;
  tags?: string[];
  isArticle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export default function PageLayout({
  children,
  displayHeader = true,
  displayFooter = true,
  showHero = true,
  darkMain = false,
  loadingState = false,
  hideContent = false,
  title,
  description = 'Software Engineer, Blogger and Technology Enthusiast',
  thumbnail = '',
  header = '',
  tags,
  isArticle = false,
  publishedTime,
  modifiedTime,
}: Props) {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: isArticle === true ? 'article' : 'website',
          locale: 'en_GB',
          url: 'https://nicholasgriffin.dev/',
          title: title,
          site_name: 'Nicholas Griffin',
          description: description,
          images: [{ url: thumbnail }, { url: header }],
          article:
            isArticle === true
              ? {
                  publishedTime,
                  modifiedTime,
                  tags,
                }
              : {},
        }}
      />
      {displayHeader === true ? <Header /> : null}
      {showHero === true ? (
        <section style={loadingState === true ? { minHeight: '100vh' } : {}}>
          <div>
            <div>
              <div>
                {header ? (
                  <Image
                    alt={title}
                    src={returnImageFormattingUrl(header)}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    priority={true}
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${returnImageFormattingUrl(
                      header
                    )}&w=16&q=1`}
                  />
                ) : null}
              </div>
            </div>
            {hideContent === true ? null : (
              <div style={header ? { position: 'relative', zIndex: '9' } : {}}>
                <div className="container mx-auto">
                  <div>
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    {description ? <p>{description}</p> : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}
      <main
        style={
          loadingState === true
            ? { display: 'none' }
            : showHero === false && darkMain === true
            ? { minHeight: '100vh!important', background: '#050505!important' }
            : showHero === false
            ? { minHeight: '100vh!important' }
            : {}
        }
      >
        <section>
          <Element name="pageContent" id="pageContent">
            {children}
          </Element>
        </section>
      </main>
      {displayFooter === true ? <Footer /> : null}
    </div>
  );
}
