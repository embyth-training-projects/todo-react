import React, {Component} from 'react';

export default class StatusFilter extends Component {
  constructor() {
    super();

    this.buttons = [
      {name: `all`, label: `All`},
      {name: `active`, label: `Active`},
      {name: `done`, label: `Done`},
    ];
  }

  render() {
    const {filter, onFilterChange} = this.props;

    const buttonsNodes = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const classNames = `btn ${isActive ? `btn-info` : `btn-outline-secondary`}`;

      return <button type='button' className={classNames} key={name} onClick={() => onFilterChange(name)}>{label}</button>
    })

    return (
      <div className='btn-group'>
        {buttonsNodes}
      </div>
    );
  }
};
