import React from 'react';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInfo = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return null;
};

export default SingleDonationItem;
