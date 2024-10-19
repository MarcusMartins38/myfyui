import React from 'react';

type TagProps = {
  color: 'green' | 'red';
  text: string;
};

const colorTailwindMap = {
  green: 'success',
  red: 'error',
};

export default function Tag({ color = 'green', text }: TagProps) {
  return (
    <div
      className={`flex items-center justify-center py-1 px-2 bg-${colorTailwindMap[color]}/15 rounded-2xl`}
    >
      <span className={`text-${colorTailwindMap[color]} text-[12px]`}>{text}</span>
    </div>
  );
}
