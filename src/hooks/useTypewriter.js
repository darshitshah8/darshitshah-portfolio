import { useEffect, useState } from "react";

/**
 * useTypewriter - looping typewriter effect with erase and retype animation.
 * @param {string[]} words - List of words to type (e.g. ["Software Engineer", "Full Stack Developer"])
 * @param {number} typingSpeed - Speed per character in ms
 * @param {number} deletingSpeed - Speed per character when deleting
 * @param {number} pauseTime - Delay before deleting in ms
 */
export function useTypewriter(
  words = ["Software Engineer"],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseTime = 1500
) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => fullText.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    // handle switching between typing and deleting
    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
