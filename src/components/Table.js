import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
  
  const generateRow = () => data.map((item, index) => (
    <tr key={ index }>
      <td>
      <Link to={`details/${item.login}`}>
        {item.id}
      </Link>
      </td>
      <td>
      <Link to={`details/${item.login}`}>
        {item.login}
      </Link>
      </td>      
    </tr>
  ));

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              LOGIN
            </th>
          </tr>
        </thead>
        <tbody>
          {
            generateRow()
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;