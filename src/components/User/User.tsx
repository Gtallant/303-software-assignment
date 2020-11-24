import React from 'react';
import './User.css';
import { UserType } from './../../types';
import Accordian from './../Accordian/Accorian';

function User({ userData }: { userData: UserType }) {
  const {
    name,
    username,
    email,
    address: {
      street,
      city,
      zipcode,
      suite
    },
    phone,
    website,
    company: {
      name: companyName
    }
  } = userData;
  const fullAddress = `${street} ${city}, ${zipcode}${suite ? ` ${suite}` : ''}`;
  console.log(userData);
  const Header = <p>{name}</p>;
  const Contents = <div className="User-contents">
    <div className="User-contents-item">
      <span className="User-contents-item-label">Username:</span>{username}
    </div>
    <div className="User-contents-item">
      <span className="User-contents-item-label">Email:</span>{email}
    </div>
    <div className="User-contents-item">
      <span className="User-contents-item-label">Phone:</span>{phone}
    </div>
    <div className="User-contents-item">
      <span className="User-contents-item-label">Website:</span>{website}
    </div>
    <div className="User-contents-item">
      <span className="User-contents-item-label">Company:</span>{companyName}
    </div>
    <div className="User-contents-item">
      <span className="User-contents-item-label">Address:</span>{fullAddress}
    </div>
  </div>
  return (
    <Accordian Header={Header} Contents={Contents} />
  );
}

export default User;
