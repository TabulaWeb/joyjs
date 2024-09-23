import localFont from "next/font/local";
import "./globals.css";

const unboundedExtraLight = localFont({
  src: "../fonts/Unbounded-ExtraLight.woff",
  variable: "--font-unbounded-extraLight",
});

const unboundedLight = localFont({
  src: "../fonts/Unbounded-Light.woff",
  variable: "--font-unbounded-light",
});

const unboundedMedium = localFont({
  src: "../fonts/Unbounded-Medium.woff",
  variable: "--font-unbounded-medium",
})

const yapariTrialMedium = localFont({
  src: "../fonts/YapariTrial-Medium.woff",
  variable: "--font-yaparitrial-medium",
})

const yapariTrialSemiBold = localFont({
  src: "../fonts/YapariTrial-SemiBold.woff",
  variable: "--font-yaparitrial-semibold",
})

export const metadata = {
  title: "JoyJS - митапы для разработчиков в Пскове",
  description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов. В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
  icon: '../image/icon.png',
  openGraph: {
    title: "JoyJS - митапы для разработчиков в Пскове",
    description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов. В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
    images: '../image/opengraph-image.png',
  }
};

export default function RootLayout(props) {
  
  return (
    <html lang="ru">
      <head>
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
        {props.children}
      </body>
    </html>
  );
}
