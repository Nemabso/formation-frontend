import React from 'react';
import Services from '../Article/Services';
import DemarchePedago from '../Article/DemarchePedago';
import Motiver from '../Article/Motiver';
import Mission from '../Article/Mission';
import NosValeurs from '../Article/NosValeurs';

export default function NotreMission() {
    return (
        <>
            <Motiver />
            <Mission />
            <NosValeurs />
            <Services />
            <DemarchePedago />
        </>
    )
}
