import React from "react";
import image from "../../assets/image.png";
import icon from "../../assets/mega-menu-category.png"
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
export default function Navbar() {
  return (
    <>
      <Box sx={{
        width: "100%",
        height: "118px",
        backgroundColor: "white",
        boxShadow: "22px 5px 8px rgb(118 120 139 / 10%) !important",    
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {md:"0px 50px",
          lg:'0px 130px !important',
        sm:'0px 20px',
      xs:'0px 0px' },
            marginTop:'30px'
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "20px",
              color:'#7c7c7c',
            }}
          >
            <li style={{
              cursor:'pointer'
            }}>تماس با ما</li>
            <li style={{
              cursor:'pointer'
            }}>درباره ما</li>
            <li style={{
              cursor:'pointer'
            }}>فروشگاه</li>
          </ul>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                marginTop:'-10px !important'
              }}
            >
              <Typography sx={{
                color:'#7c7c7c',
              }}>
             از برندهای معتبر در فروشگاه سافت کالا  IT عرضه محصولات 
              </Typography>
              <img
                style={{
                  width: "200px",
                  height: "40px",
                }}
                src={image}
                alt="#"
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{
          padding:'30px 130px',
      //     padding: {md:"1000px 50px",
      //     lg:'0px 130px !important',
      //   sm:'0px 20px',
      // xs:'0px 0px' },
          display:'flex',
          justifyContent:'space-between',
          
         }}>
          <Box sx={{
            display:'flex',
            alignItems:'center',
            gap:'20px'
           }}>
            <Button sx={{
              border:'1px solid #7c7c7c',
              borderRadius:'17px',
              padding:'8px 15px',
              color:'#333333',
            }}>ورود / ثبت نام <PermIdentitySharpIcon/></Button>
            <Box sx={{
              display:'flex',
              gap:'15px'
            }}>
            <FavoriteBorderOutlinedIcon style={{
              cursor:'pointer'
            }}/>
            <ShoppingCartOutlinedIcon   style={{
              cursor:'pointer'
            }}/>
            </Box>
          </Box>
          <Box sx={{
            display:'flex',
            gap:'40px',
            alignItems:'center'
           }}>
            <Box sx={{
              display:'flex',
              alignItems:'center',
            }}>
            <input style={{
              direction:'rtl',
              position:'relative',
              width:'355px',
              height:'40px',
              backgroundColor:'#EBEFFA',
              borderRadius:'25px',
              border:'none',
              padding:'0px 15px'
            }} placeholder="جستجوی محصولات">

            </input>
              <SearchIcon sx={{
                position:'absolute',
                marginLeft:'15px',
                color:'#777777',
                fontSize:'30px'
                }}/>
            </Box>
            <Box sx={{
              backgroundColor:'#EBEFFA',
              padding:'10px 15px',
              display:'flex',
              alignItems:'center',
              gap:'10px',
              borderRadius:'25px'
            }}>
              <ExpandMoreIcon/>
              دسته بندی کالاها
              <img src={icon} alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
