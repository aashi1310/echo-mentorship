
/**
 * Generates a random Google Meet link
 * @returns A string representing a Google Meet URL
 */
export const generateGoogleMeetLink = (): string => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  let code = letters.charAt(Math.floor(Math.random() * letters.length));
  
  for (let i = 0; i < 9; i++) {
    code += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
  }
  
  return `https://meet.google.com/${code}`;
};
