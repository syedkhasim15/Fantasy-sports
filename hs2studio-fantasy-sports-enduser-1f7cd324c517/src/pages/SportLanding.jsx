import React from 'react';
import Leagues from '../components/Leagues';
import { useParams } from 'react-router-dom';

const SportLanding = () => {

  const { sportId } = useParams();

  return (
    <div className="flex flex-col ">
      <div className="grid-cols-6">
        <Leagues sportId={sportId} />
      </div>
    </div>
  );
};

export default SportLanding;
