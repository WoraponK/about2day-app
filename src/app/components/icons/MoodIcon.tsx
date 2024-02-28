import React from 'react';
import Image from 'next/image';

const checkSize = (size?: number) => {5
  return size ?? 35;
};

const checkMoodLevel = (level: number, size: number) => {
  const iconSize = checkSize(size);

  switch (level) {
    case 1:
      return (
        <Image
          src="/images/moods/mood-level1.svg"
          alt="mood-1"
          width={iconSize}
          height={iconSize}
        />
      );
    case 2:
      return (
        <Image
          src="/images/moods/mood-level2.svg"
          alt="mood-2"
          width={iconSize}
          height={iconSize}
        />
      );
    case 3:
      return (
        <Image
          src="/images/moods/mood-level3.svg"
          alt="mood-3"
          width={iconSize}
          height={iconSize}
        />
      );
    case 4:
      return (
        <Image
          src="/images/moods/mood-level4.svg"
          alt="mood-4"
          width={iconSize}
          height={iconSize}
        />
      );
    case 5:
      return (
        <Image
          src="/images/moods/mood-level5.svg"
          alt="mood-5"
          width={iconSize}
          height={iconSize}
        />
      );
    default:
      return null;
  }
};

const MoodIcon = ({ level, size }: { level: number; size: number }) => {
  return checkMoodLevel(level, size);
};

export default MoodIcon;
