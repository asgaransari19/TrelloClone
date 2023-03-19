import React from "react";
import "./Bar2.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton, Avatar, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import FilterListIcon from "@material-ui/icons/FilterList";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Bar2() {
  return (
    <div className="bar_2">
      <div className="leftSideData">
        <div className="leftbar">
          <h3>Fe- Assignment</h3>

          <IconButton>
            <StarBorderRoundedIcon />
          </IconButton>
        </div>

        <div
          style={{
            height: "30px",
            color: "#fff",
            background: "hsla(0,0%,100%,.3)",
            fontSize: "13px",
            width: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <PollOutlinedIcon />
          <b> Workspace visible</b>
          {/* <h3 className="head">Workspace visible</h3> */}
        </div>

        <div className="rightbar">
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className="rightSideData">
        <div className="textIcon">
          <FlashOnIcon />
          <b> Automation</b>
        </div>

        <div className="textIcon">
          <FilterListIcon />
          <b> Filter</b>
        </div>

        <div className="textIcon">
          <TrendingUpIcon />
          <b> Power-Up</b>
        </div>
        <Avatar
          alt="As"
          src="#"
          style={{ width: "35px", height: "35px", marginLeft: "10px" }}
        />

        <div
          className="textIcon"
          style={{ background: "black", borderRadius: "5px" }}
        >
          <PersonAddIcon />
          <b>share</b>
        </div>

        <MoreHorizIcon
          style={{
            background: " hsla(0,0%,100%,.3)",
            marginLeft: "10px",
            color: "#fff",
          }}
        />
      </div>
    </div>
  );
}

export default Bar2;
