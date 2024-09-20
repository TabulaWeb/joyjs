import localFont from "next/font/local";
import "./globals.css";

const unboundedExtraLight = localFont({
  src: "../assets/fonts/Unbounded-ExtraLight.woff",
  variable: "--font-unbounded-extraLight",
});

export const metadata = {
  title: "JoyJS - митапы для разработчиков в Пскове",
  description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов, В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
  icon: "../assets/image/favicon.png",
  openGraph: {
    title: "JoyJS - митапы для разработчиков в Пскове",
    description: "JoyJS это митап на котором тебя ждёт программа с четырьмя докладами от экспертов, В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства. Идея \"Joy.JS\" заключается в развитии IT-культуры в регионах. Для формирования сообщества был выбран Псков, так как это родной город создателя Joy.JS Алексея Табула.",
    images: ['../assets/image/ogmeetup.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`
        ${unboundedExtraLight.variable} 
      `}>
        {children}
      </body>
    </html>
  );
}
