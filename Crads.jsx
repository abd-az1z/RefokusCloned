import React from 'react'
import Card from './Card'

function Crads() {
  const heading = [
    { topheading: "Up Next: News", bottomheading: "Insights and behind the scenes" },
    { topheading: "Get In Touch", bottomheading: "Let's get to it, together" }
  ];

  return (
    <div className='w-full font-sans mt-10'>
      <div className='max-w-screen-xl mx-auto py-20 flex gap-1'>
        <Card
          width="basis-1/3"
          head={heading[0]}
          start={false}
          para={true}
          hover="hover:bg-zinc-700"
        />
        <Card
          width="basis-2/3"
          head={heading[1]}
          start={true}
          para={false}
          hover="hover:bg-[#7442FF]"
        />
      </div>
    </div>
  );
}

export default Crads;