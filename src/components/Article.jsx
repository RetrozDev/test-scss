import duck from '../assets/duck.jpeg'
import 'boxicons'
import './Article.scss'

function Article () {
    return (
        <div className="Article">
            <article>
            <img src= {duck} alt="MyDuck" />
            <div className="AlbumName">
            <h1>Quack</h1>
            <h2>Charge the petit bout !</h2>
            <p>(2036)</p>
            </div>
            <div className="rate">
                <p>Rate this album</p>
                <box-icon type='solid' name='star'></box-icon>
                <box-icon type='solid' name='star'></box-icon>
                <box-icon type='solid' name='star'></box-icon>
                <box-icon type='solid' name='star'></box-icon>
                <box-icon type='solid' name='star'></box-icon>
            </div>
            </article>
        </div>
    )
}

export default Article