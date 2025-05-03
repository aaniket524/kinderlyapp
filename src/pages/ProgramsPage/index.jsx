import React from "react";
import EduProgram from "../../components/EduProgram";
import Programs from "../../components/Programs";
import AllPageHeader from "../../layout/AllPageHeader";

function ProgramsPage(params) {
    return(
        <>
            <AllPageHeader title="Our Programs" />

        <Programs/>
        </>

    )
}
export default ProgramsPage