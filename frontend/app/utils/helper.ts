export function checkDateStatus(date: string) {
  const currentDate = new Date();
  const givenDate = new Date(date);

  const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds

  const pastBufferDate = new Date(currentDate.getTime() - oneDayInMillis);
  const futureBufferDate = new Date(currentDate.getTime() + oneDayInMillis);

  if (givenDate < pastBufferDate) {
    return 'bg-red-50';
  } else if (givenDate > futureBufferDate) {
    return 'bg-green-50';
  } else {
    return 'bg-blue-50';
  }
}
