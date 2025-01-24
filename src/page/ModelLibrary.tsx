import { useState } from 'react';
import DataTableView from '../components/DataTableView';
import { ModelDataObj } from '../constants/types';
import CreateNewModal from '../components/CreateNewModal';
import { dummyData } from '../constants/dummydata';
import AddIcon from '@mui/icons-material/Add';
import { Paper } from '@mui/material';


function ModelLibrary() {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [data, setData] = useState<ModelDataObj[]>(dummyData);

  const addData = (dataObj: ModelDataObj) => {
    console.log(dataObj);
    setData((prev) => [ dataObj,...prev]);
    setOpenAddModel(false)
  };

  const closeAddModel = () => {
    setOpenAddModel(false);
  };

  return (
    <Paper sx={{ width: '100%',padding:2,height:`85vh` }}>
      <div className='flex justify-between items-start mb-2'>
        <div className='text-lg text-brand-secondary p-2'>Modal Library</div>
        <button className='bg-brand-primary text-white rounded-lg p-2' onClick={()=>setOpenAddModel(true)}>
          <AddIcon />
          Create New Model

        </button>

      </div>
        {openAddModel && <CreateNewModal open={openAddModel} handleClose={closeAddModel} handleSubmit={addData} />}
        <DataTableView modelData={data} />
    </Paper>
  );
}

export default ModelLibrary;
