import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            appName: 'Teamwork',
            linkBoards: 'Boards',
            linkProfile: 'Edit profile',
            sighOut: 'Sign Out',
            sighIn: 'Sign In',
            sighUp: 'Sign Up',
          },

          main: {
            heroTitle: '',
            heroText: '',
            advantagesTitle: '',
            advantagesSubtitle: '',
            advAimTitle: '',
            advClockTitle: '',
            advGlobeTitle: '',
            advAimText: '',
            advClockText: '',
            advGlobeText: '',
            videoTitle: '',
            videoSubtitle: '',
            teamTitle: '',
            teamSubtitles: '',
            teamKatya: '',
            teamSergey: '',
            teamOlya: '',
          },

          footer: {
            nameKatya: 'Katya',
            nameSergey: 'Sergey',
            nameOlya: 'Olya',
          },
        },
      },
      ru: {
        translation: {
          header: {
            appName: 'Teamwork',
            linkBoards: 'Доски',
            linkProfile: 'Профиль',
            sighOut: 'Выход',
            sighIn: 'Вход',
            sighUp: 'Регистрация',
          },

          main: {
            heroTitle: 'Управление задачами',
            heroText:
              'TEAMWORK - это удобный визуальный инструмент для отслеживания текущих задач и организации рабочего процесса. Приложение помогает эффективно управлять проектами, планировать и согласовывать работу в команде.',
            advantagesTitle: 'Преимущества',
            advantagesSubtitle: 'Почему вас стоит попробовать наше приложение',
            advAimTitle: 'Эффективность',
            advClockTitle: 'Продуктивность',
            advGlobeTitle: 'Взаимодействие',
            advAimText:
              'Вместе с TEAMWORK вы сможете визуализировать и сгруппировать намеченные цели, что позволит оптимально распределить ресурсы для их достижения',
            advClockText:
              'Планирование повышает вашу продуктивность и позволяет рационально использовать своё время, поэтому вы успеете выполнить больше задач, чем раньше',
            advGlobeText:
              'TEAMWORK помогает равномерно распределять нагрузку в команде, а также обеспечивает слаженное взаимодействие всех её участников',
            videoTitle: 'Как пользоваться приложением',
            videoSubtitle:
              'Посмотрите этот небольшой видеоролик, и использование нашего приложения станет ещё более простым и понятным',
            teamTitle: 'Наша команда',
            teamSubtitles: 'Познакомьтесь с разработчиками',
            teamKatya:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eum quibusdam, aspernatur voluptatum id ad iste natus inventore nesciunt. Officiis optio inventore consequuntur vel quae quod ipsa laborum praesentium porro',
            teamSergey:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eum quibusdam, aspernatur voluptatum id ad iste natus inventore nesciunt. Officiis optio inventore consequuntur vel quae quod ipsa laborum praesentium porro',
            teamOlya:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eum quibusdam, aspernatur voluptatum id ad iste natus inventore nesciunt. Officiis optio inventore consequuntur vel quae quod ipsa laborum praesentium porro',
          },

          footer: {
            nameKatya: 'Катя',
            nameOlya: 'Оля',
            nameSergey: 'Сергей',
          },
        },
      },
    },
  });

export default i18n;
