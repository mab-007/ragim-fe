import { PartOfSpeech } from 'wink-nlp-utils';

export function isQuestion(prompt) {
  // Tokenize the prompt
  const tokens = prompt.split(' ');

  // Get the part of speech for the last token
  const lastTokenPos = PartOfSpeech(tokens[tokens.length - 1]);

  // Check if the last token is a question word or if the prompt ends with a question mark
  return ['?', 'what', 'which', 'who', 'whom', 'whose', 'why', 'how'].includes(tokens[tokens.length - 1].toLowerCase()) || lastTokenPos === 'WRB';
}