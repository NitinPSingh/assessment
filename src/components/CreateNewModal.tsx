import { SyntheticEvent, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Box, Divider, TextField } from '@mui/material';
import {  LLMType, ModelDataFromObj, ModelDataObj, ModelStatus, ModelType } from '../constants/types';

interface CreateNewModalProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (data: any) => void;
  }


const CreateNewModal = ({open,handleClose,handleSubmit}:CreateNewModalProps) => {

    const [data, setData] = useState<ModelDataFromObj>({
        modelName: "",
        description: "",
        modelType:undefined,
        llm: undefined,
      });

    const handleChange = (key: keyof ModelDataFromObj,value:string)=> {
        setData((prev)=>{ return {...prev,[key]:value}})
    }

    const handleSelectLLM = (_:SyntheticEvent,value:string) =>{
        handleChange("llm",value as LLMType)
    }

    const handleSelectModelType = (_:SyntheticEvent,value:string) =>{
        handleChange("modelType",value as ModelType)
    }

    const isFormValid = () => {
      return (
        data.modelName.trim() !== '' &&
        data.description.trim() !== '' &&
        data.modelType !== undefined &&
        data.llm !== undefined
      );
    };

    const handleSubmitData = () => {
      if(!isFormValid()){
        return alert("some fields missing!")
      }
        const newData: ModelDataObj = {
          ...data,
          createdOn: new Date(),
          lastTrainedOn: new Date(),
          id: `#${Math.floor(1000000 + Math.random() * 9000000)}`,
          status:ModelStatus.Active,
          modelType: data.modelType as ModelType,
          llm: data.llm as LLMType
        };
        handleSubmit(newData);
      };



    
      
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle id="">
          {"Create new model"}
        </DialogTitle>
        <Divider />
        <DialogContent>
        <Box>
          <p className='text-lead-600 text-sm mt-2'>Model Name</p>
            <TextField

            placeholder="Enter Model Name"
            inputProps={{ 'aria-label': 'Without label' }}
            fullWidth
            value={data.modelName}
            onChange={(e)=>handleChange("modelName",e.target.value)}

            />
            
            
            <p className='text-lead-600 text-sm mt-2'>Model Type</p>
            <Autocomplete
                value={data.llm}
                onChange={handleSelectLLM}
                options={Object.values(LLMType)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    placeholder='Select'
                />
                )}
                sx={{"& .MuiFormControl-root":{margin:0}}}
                disableClearable
                isOptionEqualToValue={(option, value) => option === value}
            />

            <p className='text-lead-600 text-sm mt-2'>LLM</p>
            <Autocomplete
                value={data.modelType}
                onChange={handleSelectModelType}
                options={Object.values(ModelType)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    placeholder='Neural (recommended)'
                />
                )}
                sx={{"& .MuiFormControl-root":{margin:0}}}
                disableClearable
                isOptionEqualToValue={(option, value) => option === value}
            />
                    
            <p className='text-lead-600 text-sm mt-2'>Model Description</p>
            <TextField

            placeholder="Enter Model Description"
            
            inputProps={{ 'aria-label': 'Without label' }}
            value={data.description}
            fullWidth
            onChange={(e)=>handleChange("description",e.target.value)}
            rows={4}
            multiline
            />
            </Box>
        </DialogContent>
        <div className='w-full flex gap-2 p-4 pt-[0]'>
          <Button variant="contained" className='w-full !rounded-lg !shadow-none !text-[#4f46e4] !bg-[#e7e6fa]' onClick={handleClose}>Cancel</Button>
          <Button variant="contained" className='w-full !rounded-lg !shadow-none text-white bg-[#4f46e4]'  onClick={handleSubmitData} autoFocus>
            Save
          </Button>
        </div>
      </Dialog>
  )
}

export default CreateNewModal