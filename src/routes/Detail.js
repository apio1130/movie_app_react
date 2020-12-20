import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movie_detail__container">
                    {/* <span>{location.state.title}</span> */}
                    <div className="movie_detail__img">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    </div>
                    <div className="movie_detail__data">
                        <h3 className="movie_detail__title">{location.state.title}</h3>
                        <h5 className="movie_detail__year">{location.state.year}</h5>
                        <ul className="movie_detail__genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index} className="movie__genre">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p className="movie_detail__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;