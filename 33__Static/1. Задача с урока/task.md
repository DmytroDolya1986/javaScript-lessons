Статические методы промисов

**Условие**

Напишите функцию, которая принимает id пользователя и устанавливает проимс в определенное состояние

**Задание:**

    - Файл должен экспортировать функцию под именем `asyncSum`
    - Сигнатура: `asyncSum(asyncNumber1, asyncNumber2, ...)`, где аргументы - промисы, которые резолвят значения
    - `asyncSum` должна вернуть Promise
    - `asyncSum` должна посчитать математическую сумму всех значений, которые зарезолвят входящие промисы
    - `asyncSum` должна отбросить все полученные значения, которые нельзя привести к числу
    - Ф-ция `asyncSum` должна отклонить промис с ошибкой **'Can't calculate\'**, если хотябы один отклоненный промис поступит на вход
