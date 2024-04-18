import { useState } from "react";
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import CPSidebar from './CPAction/CPsidebar'
import MenuIcon from '@mui/icons-material/Menu';

import { styled } from "@mui/material";
import { ReactComponent as ReloadIcon } from '../../../../assets/icons/reload.svg'
import ChargerAvailable from "./CPAction/chargerAvailable";
import TriggerMessage from "./CPAction/triggerMessage";
import GetDiagnostics from "./CPAction/getDiagnostics";
import SendLocalList from "./CPAction/sendLocalList";
import LastSynced from "../../../../layout/LastSynced";



export default function CPAction() {
    const [optionIndex, setOptionIndex] = useState(0)
    const onOptionChanged = (e) => {
        setOptionIndex(e.index)
    }
    return (
        <>
            <LastSynced heading={'CP Action'} />
            <Stack direction={"row"}>
                <CPSidebar onChanged={onOptionChanged} />
                <Box sx={{ px: { xs: 1, md: 6 }, py: { xs: 1, md: 3 }, flexGrow: 1 }}>
                    {
                        optionIndex === 0 ? <ChargerAvailable /> : optionIndex === 1 ? <TriggerMessage /> : optionIndex === 2 ? <GetDiagnostics /> : optionIndex === 3 ? <SendLocalList /> : <GetDiagnostics />
                    }
                </Box>
            </Stack>
        </>
    )
}
