import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <tr>
            <td>CricExchange</td>
            <td>Home</td>
            <td>Squad</td>
            <td>Account</td>
            <td>Logout</td>
        </tr>
        <br />
      </div>
    );
  }
}