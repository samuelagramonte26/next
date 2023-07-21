import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const menuItems: string[] = ['Inbox', 'Starred', 'Sed Email', 'Drafts'];

export const SideBar = () => (
    <Drawer
        anchor="left"
        open
        onClose={() => console.log('Cerrando')}
    >
        <Box sx={{ padding: '5px 10px' }}>
            <Typography variant="h4">Menu</Typography>
        </Box>
        <Box sx={{ width: '250px' }}>
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={text}>
                        <ListItemIcon>
                            {index % 2 ? <MarkEmailReadIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuItems.map((text, index) => (
                    <ListItem key={text}>
                        <ListItemIcon>
                            {index % 2 ? <MarkEmailReadIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
)