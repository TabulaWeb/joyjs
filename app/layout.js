import localFont from "next/font/local";
import "./globals.css";

const unboundedExtraLight = localFont({
  src: "../fonts/Unbounded-ExtraLight.woff",
  variable: "--font-unbounded-extraLight",
  preload: true
});

const unboundedLight = localFont({
  src: "../fonts/Unbounded-Light.woff",
  variable: "--font-unbounded-light",
  preload: true
});

const unboundedMedium = localFont({
  src: "../fonts/Unbounded-Medium.woff",
  variable: "--font-unbounded-medium",
  preload: true
})

const yapariTrialMedium = localFont({
  src: "../fonts/YapariTrial-Medium.woff",
  variable: "--font-yaparitrial-medium",
  preload: true
})

const yapariTrialSemiBold = localFont({
  src: "../fonts/YapariTrial-SemiBold.woff",
  variable: "--font-yaparitrial-semibold",
  preload: true
})

export const metadata = {
  title: "JoyJS - митапы для разработчиков в Пскове",
  description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов. В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
  icon: './icon.png',
  siteName: 'joyjs',
  keywords: [
    'Митап в пскове',
    'Митап',
    'Митап по JavaScript',
    'Алексей Табула',
    'Митап по фронтенду',
  ],
  metadataBase: new URL('https://joyjs.ru'),
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/ru-RU',
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    },
  },
  openGraph: {
    title: "JoyJS - митапы для разработчиков в Пскове",
    description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов. В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
    images: './opengraph-image.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <link rel="icon" href="./icon.png" />
        <meta property="og:image" content="./opengraph-image.png" />
      </head>
      <body className={`
        ${unboundedExtraLight.variable} 
        ${unboundedLight.variable}
        ${unboundedMedium.variable}
        ${yapariTrialMedium.variable}
        ${yapariTrialSemiBold.variable}
      `}>
        { children }
      </body>
    </html>
  );
}
