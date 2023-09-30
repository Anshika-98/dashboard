import React, { useState } from 'react';

function Dropdown() {
  // State variables to manage the selected values of the two dropdowns
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  // Options for the two dropdowns
  const dropdown1Options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const dropdown2Options = [
    { value: 'optionA', label: 'Option A' },
    { value: 'optionB', label: 'Option B' },
    { value: 'optionC', label: 'Option C' },
  ];

  return (
    <div className="dropdown-container">
      <div className="select-dropdown">
        <label htmlFor="dropdown1">Wall</label>
        <select
          id="dropdown1"
          value={dropdown1Value}
          onChange={(e) => setDropdown1Value(e.target.value)}
        >
          <option value="">All</option>
          {dropdown1Options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="select-dropdown">
        <label htmlFor="dropdown2">Period</label>
        <select
          id="dropdown2"
          value={dropdown2Value}
          onChange={(e) => setDropdown2Value(e.target.value)}
        >
          <option value="">This week</option>
          {dropdown2Options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
