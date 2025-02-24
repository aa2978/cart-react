import React from 'react';

function Header({ name, title, contact }) {
  return (
    <header className="App-header">
      <div className="header-left">
        <h1><b>{name}</b></h1>
        <p className="title">{title}</p>
      </div>
      <div className="contact-info">
        <p>Email: <a className="email-link" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Web: {contact.website}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    </header>
  );
}

export default Header;
