import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';


export default ({ editMenuAccess,toggleCheckbox , handleToggle, handleClose, handleSubmit,handleChange,checked, menuaccess : {m_role_id, m_menu_id , code} , role , menu}) => {
  

    return <Fragment>
        

        <Dialog
            open={editMenuAccess}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Add Menu Access"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   Please fill out the form below!
                   
            <form>
        
            <FormControl fullWidth='true'>
                            <TextField label='Role Code' value={code} margin='normal' disabled={true} />

                        </FormControl>


            
            <List fullWidth = 'true'  >

            {menu.map(n=>{
                return(

            <ListItem 
              role={undefined}
              key = {n._id}
              dense
              onClick={toggleCheckbox(n._id)}
              button
            >
            <Checkbox
                checked ={checked.indexOf(n._id) !== -1}
                tabIndex={-1}
                disableRipple

            />
      
                    
            <ListItemText primary={n.name} />
               
      
              
            </ListItem>

             )
            })}
          
            </List>

        

             
            </form>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSubmit} color="primary" autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}

