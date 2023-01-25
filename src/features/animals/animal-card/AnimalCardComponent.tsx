import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { IAnimal } from '../animalSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface IAnimalCardProps {
    animal: IAnimal,
}


export default function AnimalCardComponent({ animal }: IAnimalCardProps) {

    return (
        <div>
            {/* {JSON.stringify(animalList[0])} */}
            {animal &&
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 300, overflow: 'hidden' }}>
                        <Grid container justifyContent="center">
                            <LazyLoadImage
                                height={'100%'}
                                width={'100%'}
                                effect="blur"
                                src={animal.imageUrl} />
                        </Grid>
                    </CardMedia>


                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {animal.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {animal.name} is an excellent dog that could bring you a lot of joy and fun times together.
                            He/She is waiting for a responsible-hearted human to spend his/her entire life being a part of your family.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined">Share</Button>
                        <Button size="small" color="secondary" variant="outlined">Adopt Me</Button>
                    </CardActions>
                </Card>
            }
        </div>
    )
}
