import React from 'react';
import { Link } from 'react-router-dom';

function TableRepo({ data }) {
  
  const generateRow = () => data?.map((item, index) => (
    <tr key={ index }>
      <td>
        {item.id}
      </td>
      <td>
        {item.name}
      </td>
      <Link to={`${item.html_url}`}>
      {item.html_url}  
      </Link>         
    </tr>
  ));

  return (
    <div>
       <caption>Repositories: </caption>
      <table border="1">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              LOGIN
            </th>
            <th>
              GIT URL
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

export default TableRepo;