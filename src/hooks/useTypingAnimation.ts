import { useState, useEffect, useCallback } from 'react';

interface UseTypingAnimationOptions {
  text: string;
  speed?: number;
  onComplete?: () => void;
  delay?: number;
}

export function useTypingAnimation({ 
  text, 
  speed = 50, 
  onComplete, 
  delay = 0 
}: UseTypingAnimationOptions) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, onComplete]);

  useEffect(() => {
    if (delay > 0) {
      const timeout = setTimeout(startTyping, delay);
      return () => clearTimeout(timeout);
    } else {
      return startTyping();
    }
  }, [startTyping, delay]);

  return { displayedText, isComplete };
}

