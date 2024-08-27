import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  imageComponent: React.ReactNode;
  textComponent?: React.ReactNode;
  url?: string;
  isLeft?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`animated-section flex flex-col-reverse ${props.isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      {props.textComponent &&
          <div className={`w-full lg:w-1/2 mb-8 mt-16 lg:mt-auto ${props.isLeft ? 'lg:ms-8' : 'lg:me-8'}`}>
              <div>{props.textComponent}</div>
          </div>
      }
      <div className={`imageContainer ${isVisible ? 'visible' : ''} w-full ${props.textComponent ? 'lg:w-1/2' : ''}`}
           ref={ref}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <div className="image">
            {props.imageComponent}
          </div>
        </a>
      </div>
    </div>
  );
};

export default AnimatedSection;
