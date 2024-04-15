import { useState, useMemo, useEffect } from "react";
import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";

import { NavItem } from "../ui/Navitem";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { siderbarListItems } from "../assets/json/sidebar";
import { useAuth } from "../core/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, onClose, ...props }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"))
  const { userCan } = useAuth();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [filteredItems, setFilterItems] = useState([])
  const indexChange = () => setActiveIndex(-1);
  const navigate = useNavigate()

  // Filter both main items and sub-items based on the userCan function
  useEffect(() => {
    let listItem = siderbarListItems().map(item => ({
      ...item,
      sub: item.sub?.filter(subItem => {
        return (!subItem.requiredRoles || subItem.requiredRoles.some(role => userCan(role)))
      }
      )
    })).filter(item => item.sub ? item.sub.length > 0 : true);
    setFilterItems(listItem, [siderbarListItems(), userCan])
    // setActiveIndex(0)
    console.log(window.location.pathname);
    navigate(window.location.pathname == '' || window.location.pathname == '/dashboard' ?
      (listItem[0].extendable ? `/${listItem[0].sub[0]?.href}` : `/${listItem[0].href}`) :
      `${window.location.pathname}`)
  }, [])

  const Content = ({ items }) => {

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 4 }}>
            <Box
              sx={{
                alignItems: "center",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                paddingBottom: 3,
              }}
            >
              <Logo
                sx={{
                  height: 42,
                  width: 42,
                }}
              />
              <Typography color="inherit" variant="caption">
                version 2.0
              </Typography>
            </Box>
          </Box>
        </div>
        <Box
          sx={{
            flexGrow: 1,
            maxHeight: "calc(100vh - 15px)",
            overflowY: "auto",
          }}
        >

          {items.map((item, index) => {
            return (
              <NavItem
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
                sub={item.sub}
                active={index === activeIndex}
                extendable={item.extendable}
                onClick={() => {
                  index !== activeIndex && setActiveIndex(index);
                  index === activeIndex && onClose();
                }}
                indexChange={indexChange}
              />
            );
          })}
        </Box>
      </Box>
    );
  }

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            width: 260,
            border: "none",
          },
        }}
        variant="permanent"
      >
        <Content items={filteredItems} />
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
          width: 260,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Content items={filteredItems} />
    </Drawer>
  );
};

export default Sidebar;
