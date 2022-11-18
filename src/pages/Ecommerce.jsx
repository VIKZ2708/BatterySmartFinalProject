
import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Employees } from '../pages';
import { Stacked, Pie, Button, LineChart, SparkLine,PersonalForm } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'black' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-4">
      <div className="flex flex-wrap justify-center">
       <div  className="bg-white dark:text-gray-200  rounded-3xl w-120 md:w-870">
       <Employees/>
        </div>
      </div>
      <div className="flex  gap-2 m-1 flex-wrap justify-center d-inline-block">
        <div className="w-400 bg-white dark:text-white-200 rounded-2xl p-6 m-3 h-50 d-inline-block">
        <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Power Cost</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
          </div>
        <div className="w-400 bg-white dark:text-white-200 rounded-2xl p-6 m-3">

          <div className="flex justify-between">
            <p className="text-xl font-semibold">Create Alert</p>
          </div>
          <PersonalForm/>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
