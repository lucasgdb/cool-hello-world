import { setTimeout } from 'node:timers/promises';

const DEFAULT_TIMEOUT = 40;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export async function write(text: string) {
   let currentIndex = 0;

   let currentTextIndex = 0;
   let currentText = '';

   while (currentText !== text) {
      if (alphabet.includes(text[currentTextIndex])) {
         console.log(currentText + alphabet[currentIndex]);

         await setTimeout(DEFAULT_TIMEOUT);

         if (text[currentTextIndex] === alphabet[currentIndex]) {
            currentText += text[currentTextIndex++];
            currentIndex = 0;
            continue;
         }

         currentIndex++;
      }

      if (ALPHABET.includes(text[currentTextIndex])) {
         console.log(currentText + ALPHABET[currentIndex]);

         await setTimeout(DEFAULT_TIMEOUT);

         if (text[currentTextIndex] === ALPHABET[currentIndex]) {
            currentText += text[currentTextIndex++];
            currentIndex = 0;
            continue;
         }

         currentIndex++;
      }

      if (numbers.includes(text[currentTextIndex])) {
         console.log(currentText + numbers[currentIndex]);

         await setTimeout(DEFAULT_TIMEOUT);

         if (text[currentTextIndex] === numbers[currentIndex]) {
            currentText += text[currentTextIndex++];
            currentIndex = 0;
            continue;
         }

         currentIndex++;
      }

      if (currentIndex === 0) {
         currentText += text[currentTextIndex++];

         console.log(currentText);

         await setTimeout(DEFAULT_TIMEOUT);
      }
   }
}
