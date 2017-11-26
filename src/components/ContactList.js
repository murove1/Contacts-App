import React, { Component } from 'react';
import Contact from './Contact';

const contacts = [
  {
    id: 1,
    name: 'Darth Vader',
    phoneNumber: '+250966666666',
    image: './img/darth.gif'
  },
  {
    id: 2,
    name: 'Alf',
    phoneNumber: '+250966344466',
    image: './img/alf.gif'
  },
  {
    id: 3,
    name: 'Ninja',
    phoneNumber: '+250976654433',
    image: './img/ninja.gif'
  },
  {
    id: 4,
    name: 'Chewbacca',
    phoneNumber: '+250456784935',
    image: './img/chewbacca.gif'
  },
  {
    id: 5,
    name: 'Homer',
    phoneNumber: '+250456222935',
    image: './img/homer.gif'
  }
];

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = { displayedContacts: contacts };
  }

  handleSearch = event => {
    let searchQuery = event.target.value.toLowerCase();
    let displayedContacts = contacts.filter(item => {
      let searchValue = item.name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({ displayedContacts: displayedContacts });
  };

  render() {
    return (
      <div className="contacts">
        <div className="search-container">
          <input
            className="search-field"
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
        </div>
        <ul className="contacts-list">
          {this.state.displayedContacts.map(item => {
            return (
              <Contact
                key={item.id}
                name={item.name}
                phoneNumber={item.phoneNumber}
                image={item.image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
