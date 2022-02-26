import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry from 'react-masonry-css';

const Results = ({photo}) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    
    return (
        // <section className="photo-list">
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="photo-list"
        >
            {photo.map((singleData) =>
                <div className="photo-item" key={singleData.id}>
                    <a href={singleData.links.html}>
                        {/* <img src={singleData.urls.regular} alt={singleData.alt_description} /> */}
                        <LazyLoadImage
                            alt={singleData.alt_description}
                            src={singleData.urls.regular}
                            effect="blur"
                        />
                    </a>
                    <p className="photo-footer">
                        Photo by <a href={singleData.user.links.html}>{singleData.user.name}</a>
                    </p>
                </div>
            )}
        {/* </section> */}
        </Masonry>
    );
}

export default Results;