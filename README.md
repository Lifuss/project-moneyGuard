# Money Guard

Це репозиторій проекту project-money-guard, функція якою є облегшити підрахунок та статистику витрат і надходжень користувача

## Огляд проекту
Цей проект реалізує fronend частину додатку money guard. Він побудований на React.js, додатково використовуючи бібліотеку Redux Toolkit для реалізації зовнішнього менеджеру стану та thunk для обробки запитів з API.

## Особливості
- Оновлюваний баланс який вираховується залежно від ваших введених транзакції
- Візуальна статистика діаграмою по місяцям
- Зручне табличне сортування по колонці
- Актуальний курс долару та євро з Monobank

## Технічі особливості
- аутентифікація з використанням JWT та refresh
- праця з запитами по CRUD оперціям які зроблені по методології REST
- Валідація полів за допомогою Fromik + Yup


## Вимоги для локального запуску проекту
Перед початком роботи з проектом, впевніться, що на вашому комп'ютері встановлені наступні засоби:
- Node.js (версія 16 або вище)

    ### Інсталяція
    1. Склонуйте цей репозиторій на свій локальний комп'ютер.
    2. Відкрийте термінал і перейдіть до кореневої папки проекту.
    3. Виконайте команду `npm install` для встановлення залежностей проекту.
    4. Виконайте команду `npm start` для запуску живої сторінки проекту.
