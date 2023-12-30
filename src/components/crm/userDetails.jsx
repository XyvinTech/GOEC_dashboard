import { useState } from "react";
import UserDetailsLayout from "./userDetails/userDetailLayout";
import UserChargingTransaction from "./userDetails/userChargingTransaction";
import UserFavourites from "./userDetails/userFavourites";
import UserAccountTransactiomn from "./userDetails/userAccountTransaction";

export default function UserDetails() {
    const [optionIndex, setOptionIndex] = useState(0)
    const onOptionChanged = (e) => {
        setOptionIndex(e.index)
    }
    return (
        <UserDetailsLayout onOptionChanged={onOptionChanged}>
            {
                optionIndex === 0 ? 
                'option 1' : optionIndex === 1 ? 
                <UserAccountTransactiomn/> : optionIndex === 2 ?
                <UserChargingTransaction/> :
                <UserFavourites/>
            }
        </UserDetailsLayout>
    )
}