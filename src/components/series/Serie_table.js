
import React, { useEffect, useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
  {
    title: 'Serie Name',
    dataIndex: 'SerieName',
    render: (text) => <a>{text}</a>,
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
    title: 'Nbr Region',
    dataIndex: 'NbrRegion',
  },
  {
    title: 'Comment',
    dataIndex: 'Comment',
  },
  {
    title: 'Vue Anatomique',
    dataIndex: 'VueAnatomique',
  },
  {
    title: 'Injection',
    dataIndex: 'Injection',
  },
  {
    title: 'Filtres',
    dataIndex: 'Filtres',
  },
  {
    title: 'Temps Injection',
    dataIndex: 'TempsInjection',
  },
  {
    title: 'Respiration',
    dataIndex: 'Respiration',
  },
  {
    title: 'A/M',
    dataIndex: 'AM',
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


export default function Serie_table({ localData = [], someHandlerProp }) {

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

  );
}