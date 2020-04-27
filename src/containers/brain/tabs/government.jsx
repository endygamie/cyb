import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Icon } from '@cybercongress/gravity';
import { CardStatisics } from '../../../components';
import { formatNumber } from '../../../utils/utils';
import { CYBER } from '../../../utils/config';

function GovernmentTab({ communityPool, proposals }) {
  try {
    return (
      <>
        <CardStatisics
          title={`Community pool, ${CYBER.DENOM_CYBER.toLocaleUpperCase()}`}
          value={formatNumber(communityPool)}
        />
        <Link to="/governance">
          <CardStatisics
            title="Proposals"
            value={formatNumber(proposals)}
            link
          />
        </Link>
        <Link to="/network/euler/parameters">
          <CardStatisics title="Network parameters" value={30} link />
        </Link>
      </>
    );
  } catch (error) {
    console.log(error);
    return <div>oops...</div>;
  }
}

export default GovernmentTab;
