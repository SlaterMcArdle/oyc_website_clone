import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';

let Slideshow = (props) => {
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

let Item = (props) => {
    return (
        <Paper>
            <Typography variant={"h2"}>{props.item.name}</Typography>
            <Typography variant={"p"}>{props.item.description}</Typography>
            <Button>Check it out!</Button>
        </Paper>
    )
}

export default Slideshow;