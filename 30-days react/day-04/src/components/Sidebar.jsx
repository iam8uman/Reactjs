// import {
//   Collapse,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import React, { useState } from "react";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import SendIcon from "@mui/icons-material/Send";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import CallIcon from '@mui/icons-material/Call';
// import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
// import BookIcon from '@mui/icons-material/Book';

// // use state hook
// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <List
//         sx={{ width: "100%", maxWidth: 180, bgcolor: "background.paper" }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"

//       >
//         <ListItemButton>
//           <ListItemIcon>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <CallIcon />
//           </ListItemIcon>
//           <ListItemText primary="Contact" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <QuestionAnswerIcon />
//           </ListItemIcon>
//           <ListItemText primary="FAQs" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <BookIcon />
//           </ListItemIcon>
//           <ListItemText primary="Blogs" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemIcon>
//             <InfoIcon />
//           </ListItemIcon>
//           <ListItemText primary="About" />
//         </ListItemButton>
//         <ListItemButton onClick={e=>setOpen(true)}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//       </List>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react'

const Sidebar = () => {
  console.log("this is sidebar ")
  return (
    <div>
      This is sidebar 
    </div>
  )
}

export default Sidebar
