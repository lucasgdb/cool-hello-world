import { setTimeout } from 'node:timers/promises';

const DEFAULT_TIMEOUT = 40;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export async function write(text: string) {
   let currentCharactersIndex = 0,
      currentTextIndex = 0,
      currentText = '';

   const consoleWriter = async (characters: string) => {
      console.log(currentText + characters[currentCharactersIndex]);

      await setTimeout(DEFAULT_TIMEOUT);

      if (text[currentTextIndex] === characters[currentCharactersIndex]) {
         currentText += text[currentTextIndex++];
         currentCharactersIndex = 0;
         return;
      }

      currentCharactersIndex++;
   };

   const consoleUnspecifiedCharacter = async () => {
      currentText += text[currentTextIndex++];

      console.log(currentText);

      await setTimeout(DEFAULT_TIMEOUT);
   };

   while (currentText !== text) {
      if (alphabet.includes(text[currentTextIndex])) {
         await consoleWriter(alphabet);
         continue;
      }

      if (ALPHABET.includes(text[currentTextIndex])) {
         await consoleWriter(ALPHABET);
         continue;
      }

      if (numbers.includes(text[currentTextIndex])) {
         await consoleWriter(numbers);
         continue;
      }

      await consoleUnspecifiedCharacter();
   }
}
