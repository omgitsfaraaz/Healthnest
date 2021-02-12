import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const dataSource = {
    chart: {
      caption: "Vision Issues",
      subcaption: "Percentage of Boys and Girls with Vision Issues",
      showvalues: "1",
      showpercentintooltip: "1",
      numberprefix: "",
      numbersuffix: "%",
      enablemultislicing: "1",
      theme: "fusion",
      "showlegend": "1",
      "smartLineColor": "#ff0000",
      "smartLineThickness": "2",
      "smartLineAlpha": "100",
      "isSmartLineSlanted": "0",
      "pieRadius": "100",
      "isSliced": "",
      "slicingDistance": "60",
      "use3DLighting": "1",
      "radius3D": "150"
    },
    data: [
      {
        label: "Boys",
        value: "64"
      },
      {
        label: "Girls",
        value: "36"
      },
    ]
  };

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
      <List>
        {['Go back'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <VerticalAlignTopIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['View as Pie chart'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            <ReactFusioncharts
                type="pie3d"
                width="100%"
                height="90%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}