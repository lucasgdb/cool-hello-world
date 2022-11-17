import { setTimeout } from 'node:timers/promises';

const DEFAULT_TIMEOUT_IN_MS = 40;
const capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nonCapitalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

export async function write(text: string) {
   let currentCharactersIndex = 0,
      currentTextIndex = 0,
      currentText = '';

   const consoleWriter = async (characters: string) => {
      console.log(currentText + characters[currentCharactersIndex]);

      await setTimeout(DEFAULT_TIMEOUT_IN_MS);

      if (text[currentTextIndex] === characters[currentCharactersIndex]) {
         currentText += text[currentTextIndex++];
         currentCharactersIndex = 0;
         return;
      }

      currentCharactersIndex++;
   };

   const consoleUnspecifiedCharacter = async () => {
      console.log((currentText += text[currentTextIndex++]));
      await setTimeout(DEFAULT_TIMEOUT_IN_MS);
   };

   while (currentText !== text) {
      if (capitalAlphabet.includes(text[currentTextIndex])) {
         await consoleWriter(capitalAlphabet);
      } else if (nonCapitalAlphabet.includes(text[currentTextIndex])) {
         await consoleWriter(nonCapitalAlphabet);
      } else if (numbers.includes(text[currentTextIndex])) {
         await consoleWriter(numbers);
      } else await consoleUnspecifiedCharacter();
   }
}
