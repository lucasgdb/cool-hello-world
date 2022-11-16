import { setTimeout } from 'node:timers/promises';

const DEFAULT_TIMEOUT = 40;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export async function write(text: string) {
   let currentIndex = 0;

   let currentTextIndex = 0;
   let currentText = '';

   const consoleWriter = async (characters: string) => {
      console.log(currentText + characters[currentIndex]);

      await setTimeout(DEFAULT_TIMEOUT);

      if (text[currentTextIndex] === characters[currentIndex]) {
         currentText += text[currentTextIndex++];
         currentIndex = 0;
         return;
      }

      currentIndex++;
   };

   while (currentText !== text) {
      if (alphabet.includes(text[currentTextIndex])) {
         await consoleWriter(alphabet);
      } else if (ALPHABET.includes(text[currentTextIndex])) {
         await consoleWriter(ALPHABET);
      } else if (numbers.includes(text[currentTextIndex])) {
         await consoleWriter(numbers);
      } else if (currentIndex === 0) {
         currentText += text[currentTextIndex++];

         console.log(currentText);

         await setTimeout(DEFAULT_TIMEOUT);
      }
   }
}
