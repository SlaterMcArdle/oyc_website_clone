
import Banner from '../../components/banner';
import Slideshow from '../../components/slideshow';
import Hours from '../../components/hours';
import RacingAdvert from '../../components/racingAdvert';
import EventsAdvert from '../../components/eventsAdvert';

import { Grid } from '@mui/material';

export default function Home() {
    return (
        <>
            <Banner />
            <Grid container spacing={0}>
                <Grid item xs={12} lg={6}>
                    <Slideshow />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Hours />
                </Grid>
            </Grid>
            <RacingAdvert />
            <EventsAdvert />
        </>
    )
};