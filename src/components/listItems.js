import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Link from "next/link";
export const mainListItems = (
  <div>
    <Link href={{ pathname: "/" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link href="/quotes">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Quotes" />
      </ListItem>
    </Link>

    {/* <Link href="/app/MoneySource">
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Money Source" />
      </ListItem>
    </Link> */}

    {/* <Link href="/app/Calender">
      <ListItem button>
        <ListItemIcon>
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItem>
    </Link> */}

    <Link href="/reports">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </Link>

    <Link href="/discounts">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Discounts" />
      </ListItem>
    </Link>
    <Link href="/currency-converter">
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Currency Converter" />
      </ListItem>
    </Link>
  </div>
);
function SignOutHandler(event) {
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("access_token");
  location.reload();
}
export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}

    <Link href="/help">
      <ListItem button>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </Link>
    <Link href="/about-us">
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
    </Link>
    <ListItem button onClick={SignOutHandler}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" />
    </ListItem>
  </div>
);
