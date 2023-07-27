import { Box, Button, TextField } from "@mui/material"
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import SaveIcon from "@mui/icons-material/SaveAsOutlined"
import { ChangeEvent, useContext, useState } from "react"
import { EntriesContext } from "@/context/entries"
import { UIContext } from "@/context/ui"

export const NewEntry = () => {
const {addNewEntry} = useContext(EntriesContext);
const {isAdding,setIsAddingEntry} = useContext(UIContext);

    const [inputValue, setInputValue] = useState<string>("")
    const [touched, setTouched] = useState<boolean>(false)

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>    setInputValue(event.target.value)
    

    const onSave = ()=>{
        if(inputValue.length === 0) return;
       
        addNewEntry(inputValue)
        setInputValue('')
        setIsAddingEntry(false)
        setTouched(false)
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>

            {
                isAdding ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            autoFocus
                            multiline
                            label='Nueva entrada'
                            placeholder='Nueva entrada'
                            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                            value={inputValue}
                            onChange={onChange}
                            error={inputValue.length <= 0 && touched}
                            onBlur={()=>setTouched(true)}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                variant='text'
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                endIcon={<SaveIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>

                    </>
                ) : (
                    <>
                        <Button
                            startIcon={<AddIcon />}
                            fullWidth
                            variant="outlined"
                            onClick={() => setIsAddingEntry(true)}

                        >
                            Agregar tarea
                        </Button>
                    </>
                )
            }


        </Box>
    )
}
