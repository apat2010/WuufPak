import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
  card: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    justify: 'space-between'

  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '100%',
  },
  picture: {
    overflow: 'auto',
    height: 100,
    width: 100,
    borderRadius: '50%'
  }
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post, image, name } = props;

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <img src={image} className={classes.picture}></img>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">

              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.body}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};