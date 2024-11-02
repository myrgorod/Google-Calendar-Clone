import dayjs from "dayjs";
export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export const getWeek = (startDate = dayjs()) => {
  // Починаємо з понеділка, тому використовуємо startOf('week') з понеділка як перший день
  const weekStart = startDate.startOf("week");

  // Створюємо масив із 7 елементів, кожен з яких є днем тижня
  const weekMatrix = new Array(7).fill(null).map((_, index) => {
    return weekStart.add(index, "day");
  });

  return weekMatrix;
};

export const getWeekByHours = (startDate = dayjs()) => {
  // Починаємо з першого дня тижня (понеділка)
  const weekStart = startDate.startOf("week");

  // Масив для зберігання тижня по годинах
  const weekByHoursMatrix = new Array(7).fill([]).map((_, dayIndex) => {
    // Створюємо масив для годин на кожен день тижня
    const dayStart = weekStart.add(dayIndex, "day").startOf("day");
    const dayHours = new Array(24).fill(null).map((_, hourIndex) => {
      return dayStart.add(hourIndex, "hour");
    });
    return dayHours;
  });

  return weekByHoursMatrix;
};

export const getDayHours = (date = dayjs()) => {
  // Визначаємо початок дня (опівніч)
  const dayStart = date.startOf("day");

  // Створюємо масив із 24 елементів, кожен з яких представляє одну годину протягом дня
  const hoursMatrix = new Array(24).fill(null).map((_, index) => {
    return dayStart.add(index, "hour");
  });

  return hoursMatrix;
};
