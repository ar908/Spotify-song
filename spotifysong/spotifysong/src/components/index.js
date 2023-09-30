import React from "react";
import Songlist from "./Songlist";
import Artistlist from "./Artistlist";
import Addsong from "./Listsong";
import Navbars from "./Navbars";

function Index() {
    return (
        <>
            <Songlist />
            <Artistlist />
            <Addsong />
        </>
    );
}

export default Index;
