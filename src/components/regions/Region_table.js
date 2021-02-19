import React, { useEffect, useState } from 'react';
import { Table, Radio, Divider } from 'antd';
const columns = [
  {
    title: 'Region',
    dataIndex: 'Region',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'nbr ROIs',
    dataIndex: 'nbrRois',
  },
  {
    title: 'Organe',
    dataIndex: 'organe',
  },
  {
    title: 'Pathologie',
    dataIndex: 'pathologie',
  },
  {
    title: 'Type pathologie',
    dataIndex: 'TypePathologie',
  },
  {
    title: 'A/M',
    dataIndex: 'AM',
  },
  {
    title: 'Nbr ROIs valide',
    dataIndex: 'NbrROIsValide',
  },
  {
    title: 'Statuts',
    dataIndex: 'Statuts',
  }, 
  {
    title: 'Patient Name',
    dataIndex: 'PatientName',
  },
  {
    title: 'Study Name',
    dataIndex: 'StudyName',
  },
  {
    title: 'Serie Name',
    dataIndex: 'SerieName',
  },
  {
    title: 'Protocole Name',
    dataIndex: 'ProtocoleName',
  },
  {
    title: 'Nbr Image',
    dataIndex: 'NbrImage',
  },
  {
    title: 'Comment',
    dataIndex: 'Comment',
  },  
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};



export default function Region_table({ localData = [], someHandlerProp}) {
  
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            someHandlerProp(selectedRows);

          },
        }}
        columns={columns}
        dataSource={localData}
        size="small"
        pagination={false}

      />

    </div>

  );}