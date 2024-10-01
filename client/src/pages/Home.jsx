
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header';
import Profile from '@/components/Progress';

const Home = () => {
  const [activeSession, setActiveSession] = useState('Chat');

  return (
    <>
    <Header/>
    <div className="flex">
      <Sidebar activeSession={activeSession} setActiveSession={setActiveSession} />
      <div className="content p-4 h-[92vh] w-[85vw]">
        {activeSession === 'Progress' && <Progress/>}
        {activeSession === 'Questions' && <div>Video Content</div>}
        {activeSession === 'Support' && <div>Voice Content</div>}
      </div>
      
    </div>

    
    </>
  );
};

export default Home;
   






