import React, {useEffect, useState} from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import axios from 'axios';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const [users, setUsers] = useState([])

  const editing = { allowDeleting: true, allowEditing: true };

  
  useEffect(() => {
    axios.get("http://localhost:3000/entries/getAll")
      .then(function(response) {
        setUsers(response.data.data)
        console.log(users);
      }).catch(function(error) {
        console.log(error);
      })
  }, []);


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={users}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Employees;
