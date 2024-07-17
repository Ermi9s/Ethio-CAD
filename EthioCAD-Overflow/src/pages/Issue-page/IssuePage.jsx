import React from "react";
import IssueCard from "../../components/Cards/IssueCard";
import Nav from "../../components/nav-bar/Nav";
import { Box } from "@mui/material";
import IssueHead from "../../components/Issue/IssueHead";
function IssuePage() {
    return (
        <Box paddingX={10}>
        <Nav/>
        <IssueHead />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        </Box>
    );

}

export default IssuePage;
