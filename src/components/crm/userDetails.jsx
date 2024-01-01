import { useState } from "react";
import UserDetailsLayout from "./userDetails/userDetailLayout";
import UserChargingTransaction from "./userDetails/userChargingTransaction";
import UserFavourites from "./userDetails/userFavourites";
import UserAccountTransactiomn from "./userDetails/userAccountTransaction";
import AssignIDTags from "./userDetails/assignIDTags";
import UserINFO from "./userDetails/userINFO";
import UserTariff from "./userDetails/userTariff";
import VRDetails from "./userDetails/VRDetails";
import UserReview from "./userDetails/useReview";

export default function UserDetails() {
    const [optionIndex, setOptionIndex] = useState(0)
    const onOptionChanged = (e) => {
        setOptionIndex(e.index)
    }
    return (
        <UserDetailsLayout onOptionChanged={onOptionChanged}>
            {
                optionIndex === 0 ?
                <UserINFO/> : optionIndex === 1 ?
                <UserAccountTransactiomn/> : optionIndex === 2 ?
                <UserChargingTransaction/> : optionIndex === 3 ?
                <UserFavourites/> : optionIndex === 4 ?
                <UserReview/> : optionIndex === 5 ?
                <UserTariff/> : optionIndex === 6 ?
                <AssignIDTags/> : <VRDetails/>
            }
        </UserDetailsLayout>
    )
}